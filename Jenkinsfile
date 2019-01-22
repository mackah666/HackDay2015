pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo 'Building'
            }
        }
        stage('Test') { 
            steps {
                echo 'Testing' 
            }
        }
        stage('Deploy') { 
            steps {
                echo 'Deploying'
            }
        }
	stage('Cleaning up') {
	    steps {
		echo 'Clenaing up'
	    }
	}
    }
}
