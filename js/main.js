import angular from 'angular';
import 'angular-ui-router';
import configFunct from './config';
import HomeController from './controllers/home.controller';

// Inject ui.router module into angular app module
// Add config
angular
  .module('app', ['ui.router'])
  .config(configFunct)
  .controller('HomeController', HomeController);



