module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-badge-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <p class="p m-b">
          <span class="badge">1</span> Something cool
        </p>
        <p class="p m-b">
          <span class="badge badge--primary">1</span> Something cool
        </p>
        <p class="p m-b">
          <span class="badge badge--secondary">1</span> Something cool
        </p>
        <p class="p m-b">
          <span class="badge badge--success" style="font-size:1em">1</span> Something cool
        </p>
        <p class="p m-b">
          <span class="badge badge--error">10</span> Something cool
        </p>
        <p class="p m-b">
          <span class="badge badge--warning">1</span> Something cool
        </p>
        <p class="p m-b">
          <span class="badge badge--info">1</span> Something cool
        </p>
        <p class="p m-b">
          <a class="btn btn--primary">Something cool&nbsp;&nbsp;<span class="badge badge--secondary">1</span></a>
        </p>
        <p class="p m-b">
          <span class="badge badge--primary" style="">
            <s-icon driver="fontawesome" icon="fas fa-burn"></s-icon>
          </span> Cool icon
        </p>
        <p class="p m-b">
          <span class="badge badge--primary" style="font-size:1em">
            <s-icon driver="fontawesome" icon="fas fa-burn"></s-icon>
          </span> Cool icon
        </p>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'node_modules/coffeekraken-s-button-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        @include s-button-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-badge-classes(
          $colors: default primary secondary success error warning info
        );
        .badge {
          font-size: 0.6em;
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import SIconComponent from 'coffeekraken-s-icon-component'
      `
    }
  }
}
