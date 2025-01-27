pipeline {
    agent any

    environment {
        GIT_CRED = 'git-cred' // GitHub token credentials ID
    }

    stages {
        stage('Checkout Code from GitHub') {
            steps {
                script {
                    // Checkout code from GitHub
                    git credentialsId: "${GIT_CRED}", url: 'https://github.com/punit-appi/react_spring_mysql-dock-devo.git', branch: 'main'
                }
            }
        }
        stage('Build and Run Frontend') {
            steps {
                script {
                    // Build frontend Docker image
                    docker.build('frontend-image', './frontend')

                    // Run the frontend container on a different port (e.g., 8082)
                    docker.image('frontend-image').run('-d -p 8082:80')
                }
            }
        }
        stage('Build and Run Backend') {
            steps {
                script {
                    // Build backend Docker image
                    docker.build('backend-image', './backend')

                    // Run the backend container
                    docker.image('backend-image').run('-d -p 8081:8081')
                }
            }
        }
    }
}
