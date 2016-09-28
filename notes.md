Upgrading to Angular 2


Pros
  - architecture is somewhat similar to NG1. So on a very high level, we can think about doing things in a similar way
  - relies more heavily on "native" classes and language features
  - CLI seems like a pretty full-featured
    can really aid in consistency
    automating boilerplate
  - components
    provide a more clear/expressive way to build UI (better transclusion, kind of like React)
    CSS modules! (via webpack)
  - official documentation is very detailed (almost to a fault)
  - forms module
  - upgrade adapter (in theory) shoudl make it fairly straightforward to interop between ng1 and ng2
  - defaults to using types
  - uses module bundler -- so, no more html dependency order hell
  - supposedly has server side rendering

Cons
  - Very boilerplaty
    import AND DI;
    DI/metadata is fairly complicated
    modules are bulkier
    a lot more boilerplate files to set up project
  - a lot of new concepts
    template syntax is almost completely different
    onChange, broadcasting mechanisms completely different
    data binding completely different
    directives still exist, but components are primary building block
    ng1 controllers not attached to directives no longer exist
    filters ~= pipes
    different change detection
    forms module
    RxJs
  - as a result of different architecture, file structure is different
  - still more OO than functional
    components rely on internal state
    data binding
  - community is still very young
    not a lot of relevant 3rd party learning resources/tutorials
    a lot of info is outdated -- NG team changes the api a lot between "release candidates"
  - CLI is still in beta, kind of buggy
  - opaque error messages
  - some pain figuring out what the correct boilerplate is viz-a-vis the docs, lack of SO
  - stacktraces are total gibberish
  - still some magic that i'm not quite comfortable with

Meh
  - debugger still workes with sourcemaps
  - need to do some work on console so it can use NG2 components, or any kind of hybrid applicaiton, for that matter
    add module bundler -- probably worth doing anyhow
      would take us out of file dependency hell
      need it if we want to use flow/typescript anyhow
    ?upgrade to angular 1.5? -- also might be worth doing anyhow
      introduces component directive
      cleaner syntax for one-time binding
  - not quite sure how to connect it to existing node app. angular-cli is built for a standalone SPA
  - probably won't be going back and forth between 1 and 2 very much. there might be some shortcuts we can take if the vertical console is isolated in one NG2 component
  - I don't think angular 1.3 directives fit into NG2 -> need 1.5 components; at very least, directive needs to be set up in a very specific way (see below)

Risks
  - not many accounts of large projects built with it -- warts are unknown
  - NG2 may or may not catch on -- community size is an unknown
  - all the bugs may not have been worked out yet.




MISC


Hybrid apps use the UpgradeAdapter
  allows us to have a hybrid app with angular2 and angular1 code
  need module loader for this to work
  only angular 1.5 components (or 1.3 directives written in specific way) can interop with angular 2
  diagram -> https://angular.io/docs/ts/latest/guide/upgrade.html#!#how-the-upgrade-adapter-works


ANGULAR-CLI
  Make sure you are using npm 3!


Typescript vs flow

  TS
    classes + interfaces are "structurally" typed
    constructor declaration of private/public variables
    TS sublime plugin is awesome -- does a great job of catching syntax, import/export errors

  Flow
    classes are "nominally typed", interfaces are "structurally" typed
    I like that the type checking is removed from compilation -- still tells you about errors, but doesn't block you
    doesn't use language features that aren't standardized
    easier to drop existing projects (on server, client already using babel)



component directives
  restrict: E
  scope: {} (isolate scope)
  bindToController: {} (bind stuff to controller -- don't use $scope -- $scope doesn't exist in ng2)
  use controllerAs
  template

  ex:
  export function heroDetailDirective() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {
        hero: '=',
        deleted: '&'
      },
      template: '../some/dir/file.js',
      controller() {
        this.onDelete = () => {
          this.deleted({ hero: this.hero });
        };
      },
      controllerAs: 'ctrl'
    };
  }

  or, using the component directive:
  export const heroDetail = {
    bindings: {
      hero: '<',
      deleted: '&'
    },
    template: '../some/dir/file.js',
    controller() {
      this.onDelete = () => {
        this.deleted(this.hero);
      };
    }
  };