module.exports = function (grunt) {
    grunt.initConfig(
        {
            jasmine: {
                unit: {
                    src: [
                        'lib/jquery.js',
                        'lib/sinon.js',
                        'lib/chai.js',
                        'lib/EventPublisher.js',
                        'src/modules/**/*js'
                    ],
                    options: {
                        specs: ['tests/modules/**/*.js'],
                        keepRunner: true
                    }
                },
                system: {
                    src: [
                        'lib/jquery.js',
                        'lib/sinon.js',
                        'lib/chai.js',
                        'lib/EventPublisher.js',
                        'src/**/*js'
                    ],
                    options: {
                        specs: ['tests/featureSpec.js'],
                        keepRunner: true
                    }
                }
            },
            jslint: {
                src: [
                    'src/**/*.js',
                    'tests/**/*.js'
                ]
            },
            watch: {
                testing: {
                    files: [
                        'src/**/*.js',
                        'tests/**/*.js'
                    ],
                    tasks: ['jslint', 'jasmine:unit'],
                    options: {
                        spawn: false
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
};