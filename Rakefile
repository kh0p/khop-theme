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
