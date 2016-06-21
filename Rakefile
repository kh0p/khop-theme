desc "Full --save-dev update"
task :update do
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
    "run-sequence" ]

  dep.each do |d|
    system "npm uninstall --save-dev " + d
    system "npm install --save-dev " + d
  end
end
