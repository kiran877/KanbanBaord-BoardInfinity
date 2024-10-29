pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        IMAGE_NAME = 'saikiran078/frontend'
        // Firebase credentials as Jenkins secrets
        REACT_APP_FIREBASE_API_KEY = credentials('firebase-api-key')
        REACT_APP_FIREBASE_AUTH_DOMAIN = credentials('firebase-auth-domain')
        REACT_APP_FIREBASE_PROJECT_ID = credentials('firebase-project-id')
        REACT_APP_FIREBASE_STORAGE_BUCKET = credentials('firebase-storage-bucket')
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID = credentials('firebase-messaging-sender-id')
        REACT_APP_FIREBASE_APP_ID = credentials('firebase-app-id')
        REACT_APP_FIREBASE_MEASUREMENT_ID = credentials('firebase-measurement-id')
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${env.BUILD_NUMBER}", 
                    "--build-arg REACT_APP_FIREBASE_API_KEY=${REACT_APP_FIREBASE_API_KEY} 
                    --build-arg REACT_APP_FIREBASE_AUTH_DOMAIN=${REACT_APP_FIREBASE_AUTH_DOMAIN} 
                    --build-arg REACT_APP_FIREBASE_PROJECT_ID=${REACT_APP_FIREBASE_PROJECT_ID} 
                    --build-arg REACT_APP_FIREBASE_STORAGE_BUCKET=${REACT_APP_FIREBASE_STORAGE_BUCKET} 
                    --build-arg REACT_APP_FIREBASE_MESSAGING_SENDER_ID=${REACT_APP_FIREBASE_MESSAGING_SENDER_ID} 
                    --build-arg REACT_APP_FIREBASE_APP_ID=${REACT_APP_FIREBASE_APP_ID} 
                    --build-arg REACT_APP_FIREBASE_MEASUREMENT_ID=${REACT_APP_FIREBASE_MEASUREMENT_ID} .")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        docker.image("${IMAGE_NAME}:${env.BUILD_NUMBER}").push()
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
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed. Check logs for details.'
        }
    }
}
