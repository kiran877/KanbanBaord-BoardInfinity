pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        IMAGE_NAME = 'saikiran078/frontend'
        VERSION_TAG = "v${env.BUILD_NUMBER}"  // Incremental versioning
    }

    stages {
        stage('Load Firebase Config') {
            steps {
                script {
                    // Load Firebase environment variables from the .env file
                    withCredentials([file(credentialsId: 'firebase-env', variable: 'FIREBASE_ENV_FILE')]) {
                        def props = readFile(FIREBASE_ENV_FILE).split('\n')
                        props.each { line ->
                            def (key, value) = line.split('=')
                            env[key.trim()] = value.trim()
                        }
                    }
                }
            }
        }

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${VERSION_TAG}", 
                    "--build-arg REACT_APP_FIREBASE_API_KEY=${env.REACT_APP_FIREBASE_API_KEY} \
                    --build-arg REACT_APP_FIREBASE_AUTH_DOMAIN=${env.REACT_APP_FIREBASE_AUTH_DOMAIN} \
                    --build-arg REACT_APP_FIREBASE_PROJECT_ID=${env.REACT_APP_FIREBASE_PROJECT_ID} \
                    --build-arg REACT_APP_FIREBASE_STORAGE_BUCKET=${env.REACT_APP_FIREBASE_STORAGE_BUCKET} \
                    --build-arg REACT_APP_FIREBASE_MESSAGING_SENDER_ID=${env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID} \
                    --build-arg REACT_APP_FIREBASE_APP_ID=${env.REACT_APP_FIREBASE_APP_ID} \
                    --build-arg REACT_APP_FIREBASE_MEASUREMENT_ID=${env.REACT_APP_FIREBASE_MEASUREMENT_ID} .")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        docker.image("${IMAGE_NAME}:${VERSION_TAG}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage - Here, you can add your deployment scripts or commands'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo "Build and deployment successful! Image pushed as ${IMAGE_NAME}:${VERSION_TAG}"
        }
        failure {
            echo 'Build or deployment failed. Check logs for details.'
        }
    }
}
