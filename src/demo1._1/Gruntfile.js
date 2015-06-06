/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    install: true,
                    targetDir: "wwwroot/lib",
                    cleanTargetDir: true,
                    layout: "byComponent"
                }
            }
        },
        less: {
            development: {
                files: {
                    "wwwroot/css/site.css": ["wwwroot/less/site.less","wwwroot/less/meuestilo.less"]
                }
            },
            production: {
                options: {
                    compress:true,
                    paths: ["assets/css"],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        corinicial: '#333333',
                        corfinal:'#003333'
                    }
                },
                files: {
                    "wwwroot/css/site.min.css": ["wwwroot/less/site.less", "wwwroot/less/meuestilo.less"]
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                expand: true,
                flatten: true,
                src: 'wwwroot/css/*.css',
                dest: 'wwwroot/css'
            }
        },
        watch: {
            less: {
                files: "wwwroot/less/*.less",
                tasks:["less","autoprefixer"]
            }
        },
        sprite: {
            all: {
                src: 'wwwroot/images/icons/*.png',
                dest: 'wwwroot/images/spritesheet.png',
                destCss: 'wwwroot/css/sprites.css'
            }
        }

    });

    grunt.registerTask("default",["bower","less","autoprefixer"])

    grunt.registerTask('helloVS', function () {
        console.log('hello Visual Studio Summit');
    });

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-spritesmith');
    

};