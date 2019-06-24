module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-52-181-2.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/csc648-team6.pem',
      ref: 'origin/master',
      repo: 'git@github.com:atsang14/awsTesting.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
