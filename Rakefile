require "rubygems"
require "bundler/setup"
require "coffee-script"
require 'uglifier'
require 'zlib'
require 'stringio'

ENV['TZ'] = 'Asia/Ho_Chi_Minh'

public_dir      = "public"    # compiled site directory
source_dir      = "source"    # source file directory

app_js = [
    "javascripts/imagesloaded.pkgd.min.js",
    "javascripts/jquery.infinitescroll.min.js",
    "javascripts/jquery.scrollTo-1.4.2-min.js",
    "javascripts/main.js"
]

comic_js = [
    "javascripts/comic/jQuery.cssTransform.Patch.js",
    "javascripts/comic/cp_depends.js",
    "javascripts/comic/excanvas.js",
    "javascripts/comic/CanvasWidget.js",
    "javascripts/comic/CanvasPainter.js",
    "javascripts/comic/jquery.batchImageLoad.js",
    "javascripts/comic/interface.js",
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

def gzip(fin, fout)
    Zlib::GzipWriter.open(fout) do |gz|
     File.open(fin,'rb') do |fp|
       while chunk = fp.read(16 * 1024) do
         gz.write chunk
       end
     end
     gz.close
    end
end

def generate_js_files(name, files, destDir)
  puts "Write #{destDir}/js/#{name}.js"
  puts "Write #{destDir}/js/dev.#{name}.js"
  open("#{destDir}/js/dev.#{name}.js", 'w') do |page|
    files.each { |jsfile|
        page.puts File.read(jsfile)
    }
  end
  open("#{destDir}/js/#{name}.js", 'w') do |page|
      page.puts Uglifier.compile(File.read("#{destDir}/js/dev.#{name}.js"))
  end
  puts "Write #{destDir}/js/#{name}.js.gz"
  open("#{destDir}/js/#{name}.js.gz", 'w') do |page|
      page.puts gzip("#{destDir}/js/#{name}.js", "#{destDir}/js/#{name}.js.gz")
  end
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
end

desc "Generate CSS & javascript"
task :generate do
  puts "## Generate CSS & Javascript"
  Rake::Task[:generate_js].execute
  Rake::Task[:generate_css].execute
end

desc "Watch the css & javascript and regenerate when it changes"
task :watch do
  compassPid = Process.spawn("compass watch")
end