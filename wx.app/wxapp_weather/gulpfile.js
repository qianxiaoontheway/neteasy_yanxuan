//从package.jason分析 node_modules引入gulp
const gulp =require('gulp');
//gulp 思想很简单  将开发流程分成一个个任务  让任务自动执行
//创建了一个json 专业任务
const src='./client'; //开发目录
const dist='./dist';//项目目录
gulp.task('json',()=>{
return gulp
//找到文件
  .src(`${src}/**/*.json `)
  //进行一番处理
  .pipe(gulp.dest(dist))
});