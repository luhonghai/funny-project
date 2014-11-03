require "rubygems"
require "bundler/setup"
require 'uglifier'
require 'zlib'
require 'stringio'
require 'rubygems'
require 'aws-sdk'

ENV['TZ'] = 'Asia/Ho_Chi_Minh'

bucket_name     = "assets.trollvd.com"
public_dir      = "public"    # compiled site directory

aws_upload_list = [
    {
        name: "js/app.js.gz",
        content_type: "text/javascript",
        content_encoding: "gzip"
    },
    {
        name: "js/comic.js.gz",
        content_type: "text/javascript",
        content_encoding: "gzip"
    },
    {
        name: "css/app.css.gz",
        content_type: "text/css",
        content_encoding: "gzip"
    },
    {
        name: "css/comic/comic.css.gz",
        content_type: "text/css",
        content_encoding: "gzip"
    }
]

app_js = [
    "javascripts/imagesloaded.pkgd.min.js",
    "javascripts/jquery.infinitescroll.min.js",
    "javascripts/jquery.scrollTo-1.4.2-min.js",
    "javascripts/main.js"
]

comic_js = [
    "javascripts/comic/interface.js",
    "javascripts/comic/jQuery.cssTransform.Patch.js",
    "javascripts/comic/cp_depends.js",
    "javascripts/comic/excanvas.js",
    "javascripts/comic/CanvasWidget.js",
    "javascripts/comic/CanvasPainter.js",
    "javascripts/comic/jquery.batchImageLoad.js",
    "javascripts/comic/jquery.autogrow.js",
    "javascripts/comic/jquery.blockUI.min.js",
    "javascripts/comic/colorpicker.js",
    "javascripts/comic/jquery.repeatedclick.js",
    "javascripts/comic/jquery.imgDrop.js",
    "javascripts/comic/jquery.getimagedata.min.js",
    "javascripts/comic/base64.js",
    "javascripts/comic/canvas2image.js",
    "javascripts/comic/jquery.mCustomScrollbar.concat.min.js",
    "javascripts/comic/rage.min.js",
]

def gzip(fin)
    system "gzip -k -f -9 #{fin}"
end

def aws_upload(s3, key, bucket_name, filename, content_type, content_encoding)
    s3.buckets[bucket_name].objects[key].write(:file => filename,
                                        :acl => :public_read,
                                        :content_type => content_type,
                                        :content_encoding => content_encoding)
    puts "Uploading file #{filename} to bucket #{bucket_name}."
end

def generate_js_files(name, files, destDir)
  puts "Write #{destDir}/js/#{name}.js"
  puts "Write #{destDir}/js/dev.#{name}.js"
  open("#{destDir}/js/dev.#{name}.js", 'w') do |page|
    files.each { |jsfile|
        page.puts File.read(jsfile, :external_encoding => 'utf-8',
                            :internal_encoding => 'utf-8')
    }
  end
  open("#{destDir}/js/#{name}.js", 'w') do |page|
      page.puts Uglifier.compile(File.read("#{destDir}/js/dev.#{name}.js", :external_encoding => 'utf-8',
                                                                             :internal_encoding => 'utf-8'))
  end
  puts "Gzip to #{destDir}/js/#{name}.js.gz"
  gzip("#{destDir}/js/#{name}.js")
end

desc "Generate Javascript"
task :generate_js do
    generate_js_files("app",app_js, public_dir);
    generate_js_files("comic",comic_js, public_dir);
end

desc "Generate CSS"
task :generate_css do
  puts "Compile CSS"
  system "compass compile"
  puts "Gzip to #{public_dir}/css/app.css.gz"
  gzip("#{public_dir}/css/app.css")
  puts "Gzip to #{public_dir}/css/comic/comic.css.gz"
  gzip("#{public_dir}/css/comic/comic.css")
end

desc "Generate CSS & javascript"
task :generate do
  puts "## Generate CSS & Javascript"
  Rake::Task[:generate_js].execute
  Rake::Task[:generate_css].execute
end

desc "Watch the css & javascript and regenerate when it changes"
task :watch do
  system "compass watch"
end

def aws_upload_dir(s3,dir, bucket_name, public_dir)
    Dir.glob("#{public_dir}/#{dir}/**/*.{png,jpeg,jpg,gif,bmp,json}") do |file|
       key = file[public_dir.length + 1, file.length]
       if !File.directory?(file)
            puts "Uploading file #{file} to bucket #{bucket_name}."
            s3.buckets[bucket_name].objects[key].write(:file => file, :acl => :public_read)
       end
    end
end

task :deploy_assets do
    puts "Upload images"
    s3 = AWS::S3.new
    aws_upload_list.each { |f|
        file_name = f[:name]
        puts "Prepare file #{file_name} for upload"
        aws_upload(s3, file_name, bucket_name, "#{public_dir}/#{file_name}", f[:content_type], f[:content_encoding])
    }
    #aws_upload_dir(s3, "images", bucket_name, public_dir)
    #aws_upload_dir(s3, "comic", bucket_name, public_dir)
end

desc "Deploy Javascript & CSS to AWS"
task :deploy do
    Rake::Task[:generate].execute
    Rake::Task[:deploy_assets].execute
end