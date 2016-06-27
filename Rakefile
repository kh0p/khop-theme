require "rubygems"
require "json"

# Configuration
dep = [
  "browser-sync",
  "del",
  "gulp",
  "gulp-autoprefixer",
  "gulp-coffee",
  "gulp-concat",
  "gulp-cssmin",
  "gulp-data",
  "gulp-header",
  "gulp-jade",
  "gulp-plumber",
  "gulp-sass",
  "gulp-sitemap",
  "gulp-sitemap-files",
  "gulp-uglify",
  "run-sequence" 
]

namespace :package do
  desc "Update package.json version (arg: version)"
  task :version, [:number] do |t, args|
    package = File.read("package.json")
    content = JSON.parse(package)
    content["version"] = args[:number]
    
    # Exporting changes back to package.json
    open("package.json", "w+") do |f|
      f.puts JSON.pretty_generate content
    end
    
    puts "Version in package.json has been changed to " + content["version"]
  end
end

desc "Build that helps to run developement environment"
task :devbuild do
  system "mkdir _site/assets/tmp"
  system "wget -O _site/assets/tmp/jquery.js \
          https://code.jquery.com/jquery-2.2.4.min.js"
  system "wget -O _site/assets/tmp/bootstrap.css \
          https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css"
  system "wget -O _site/assets/tmp/bootstrap.js \
          https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js"
end

desc "Build dependencies from ground-up"
task :build_dep do
  dep.each do |d|
    system "npm install --save-dev " + d
  end
end

desc "Full --save-dev update"
task :update do
  dep.each do |d|
    system "npm uninstall --save-dev " + d
    system "npm install --save-dev " + d
  end
end

desc "Creating CSS directory structure"
task :struct_css do
  system "mkdir ./source/css/0-tools"
  system "mkdir ./source/css/1-base"
  system "mkdir ./source/css/2-modules"
  system "mkdir ./source/css/3-sections"
  system "mkdir ./source/css/4-layouts"
end
