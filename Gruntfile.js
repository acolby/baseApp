'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			app: {
				files: {
					'app/styles/main.css': 'app/styles/main.less'
				}
			}
		},
		jade: {
			compile: {
				options: {
					client: false,
					pretty: true,
					data: {
						debug: false
					}
				},
				files: [{
					cwd: 'app/views',
					src: '*.jade',
					dest: 'app/views',
					expand: true,
					ext: '.html'
				}, {
					cwd: 'app/views/partials',
					src: '*.jade',
					dest: 'app/views/partials',
					expand: true,
					ext: '.html'
				}]
			}
		},
		watch: {
			styles: {
				files: ['app/styles/main.less'],
				tasks: ['less']
			},
			jade: {
				files: ['app/views/partials/*.jade', 'app/views/*.jade'],
				tasks: ['jade']
			}
		},
		locales: {
			options: {
				locales: ['en_US', 'ja_JP']
			},
			update: {
				src: [
					'app/views/**/*.html',
					'app/scripts/**/*.js'
				],
				dest: 'app/locales/{locale}/i18n.json'
			},
			build: {
				src: 'app/locales/**/i18n.json',
				dest: 'app/locales/{locale}/i18n.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-locales');

};