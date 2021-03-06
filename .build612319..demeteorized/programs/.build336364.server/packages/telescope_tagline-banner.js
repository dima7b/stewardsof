(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var i18n = Package['telescope:i18n'].i18n;
var Events = Package['telescope:events'].Events;
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
var Posts = Package['telescope:posts'].Posts;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var Email = Package.email.Email;
var Spiderable = Package.spiderable.Spiderable;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
var tinycolor = Package['aramk:tinycolor'].tinycolor;
var moment = Package['momentjs:moment'].moment;
var ReactiveTable = Package['aslagle:reactive-table'].ReactiveTable;
var Avatar = Package['utilities:avatar'].Avatar;
var sanitizeHtml = Package['djedi:sanitize-html'].sanitizeHtml;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var MeteorFilesHelpers = Package['sanjo:meteor-files-helpers'].MeteorFilesHelpers;
var Handlebars = Package.ui.Handlebars;
var OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
var getSlug = Package['ongoworks:speakingurl'].getSlug;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Iron = Package['iron:core'].Iron;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var DDP = Package.livedata.DDP;
var DDPServer = Package.livedata.DDPServer;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Spacebars = Package.spacebars.Spacebars;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __, translations;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/telescope:tagline-banner/lib/tagline.js                                          //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
Telescope.modules.add("top", {                                                               // 1
  template: "tagline_banner",                                                                // 2
  order: 1                                                                                   // 3
});                                                                                          // 4
                                                                                             // 5
var showTaglineBanner = {                                                                    // 6
  fieldName: 'showTaglineBanner',                                                            // 7
  fieldSchema: {                                                                             // 8
    type: Boolean,                                                                           // 9
    optional: true,                                                                          // 10
    autoform: {                                                                              // 11
      group: '01_general',                                                                   // 12
      instructions: 'Show tagline on homepage.'                                              // 13
    }                                                                                        // 14
  }                                                                                          // 15
};                                                                                           // 16
Settings.addField(showTaglineBanner);                                                        // 17
                                                                                             // 18
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/telescope:tagline-banner/package-i18n.js                                         //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
TAPi18n.packages["telescope:tagline-banner"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                             // 2
// define package's translation function (proxy to the i18next)                              // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                             // 4
                                                                                             // 5
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/telescope:tagline-banner/Applications/MAMP/websites/stewardsof/packages/telescop //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _ = Package.underscore._,                                                                // 1
    package_name = "telescope:tagline-banner",                                               // 2
    namespace = "telescope:tagline-banner";                                                  // 3
                                                                                             // 4
if (package_name != "project") {                                                             // 5
    namespace = TAPi18n.packages[package_name].namespace;                                    // 6
}                                                                                            // 7
// integrate the fallback language translations                                              // 8
translations = {};                                                                           // 9
translations[namespace] = {"showTaglineBanner":"Show Tagline Banner"};                       // 10
TAPi18n._loadLangFileObject("en", translations);                                             // 11
TAPi18n._registerServerTranslator("en", namespace);                                          // 12
                                                                                             // 13
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/telescope:tagline-banner/Applications/MAMP/websites/stewardsof/packages/telescop //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _ = Package.underscore._,                                                                // 1
    package_name = "telescope:tagline-banner",                                               // 2
    namespace = "telescope:tagline-banner";                                                  // 3
                                                                                             // 4
if (package_name != "project") {                                                             // 5
    namespace = TAPi18n.packages[package_name].namespace;                                    // 6
}                                                                                            // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                              // 8
  TAPi18n.translations["fr"] = {};                                                           // 9
}                                                                                            // 10
                                                                                             // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                   // 12
  TAPi18n.translations["fr"][namespace] = {};                                                // 13
}                                                                                            // 14
                                                                                             // 15
_.extend(TAPi18n.translations["fr"][namespace], {"showTaglineBanner":"Afficher le slogan"}); // 16
TAPi18n._registerServerTranslator("fr", namespace);                                          // 17
                                                                                             // 18
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:tagline-banner'] = {};

})();

//# sourceMappingURL=telescope_tagline-banner.js.map
