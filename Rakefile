require "rubygems"
require "bundler/setup"
require "coffee-script"
require 'uglifier'
require 'zlib'
require 'stringio'

ENV['TZ'] = 'Asia/Ho_Chi_Minh'

public_dir      = "public"    # compiled site directory
source_dir      = "source"    # source file directory


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

desc "Generate Javascript"
task :generate_js do
  puts "Compile source #{public_dir}/js/app.js.coffee"
  js_source = CoffeeScript.compile File.read("#{public_dir}/js/app.js.coffee")
  puts "Write #{public_dir}/js/app.js"
  open("#{public_dir}/js/app.js", 'w') do |page|
      page.puts Uglifier.compile(js_source)
  end
  puts "Write #{public_dir}/js/app.js.gz"
  open("#{public_dir}/js/app.js.gz", 'w') do |page|
      page.puts gzip("#{public_dir}/js/app.js", "#{public_dir}/js/app.js.gz")
  end
  puts "Write #{public_dir}/js/dev.js"
  open("#{public_dir}/js/dev.js", 'w') do |page|
        page.puts js_source
  end

end

desc "Generate CSS"
task :generate_css do
  system "compass compile --css-dir #{public_dir}/css"
end

desc "Generate CSS & javascript"
task :generate do
  puts "## Generate CSS & Javascript"
  Rake::Task[:generate_js].execute
  Rake::Task[:generate_css].execute
end

desc "Watch the css & javascript and regenerate when it changes"
task :watch do
  system "compass compile --css-dir #{public_dir}/css" unless File.exist?("#{public_dir}/css/app.css")
  compassPid = Process.spawn("compass watch")
end