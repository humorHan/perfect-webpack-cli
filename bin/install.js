const ora = require('ora'); //ora 一个命令行loading效果
const chalk = require('chalk');
const fs = require('fs');
const inquirer = require('inquirer'); //命令行交互
const downLoadGit = require('download-git-repo'); //github api用来下载github的模板

module.exports = async () => {
  // 下载模板
  let loading = ora('fetching template......');
  let answer = await inquirer.prompt([{
    type: 'input',
    name: 'projectName',
    message: 'project name',
    default: 'perfectWebpack'
  }]);
  let project = answer.projectName;
  if (fs.existsSync(project)) {
    console.log(chalk.red('要创建的文件夹名称和当前目录下某文件夹名称同名'));
    return false;
  }
  loading.start();
  downLoadGit('humorHan/webpack4.x', process.cwd() + '/' + project, (err) => {
    if (err) {
      console.log(err)
      return;
    }
    console.log(process.cwd() + '/' + project);
    loading.succeed();
  });
}
