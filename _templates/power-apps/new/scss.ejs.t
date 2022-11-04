---
to: output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.scss
force: true
---
@import "~@db-ui/core/sources/css/webpack.assets-paths";
@import "~@db-ui/core/sources/css/db-ui-core.vars";
@import "~@db-ui/core/sources/css/db-ui-core.general";

<% if(includeIcon){   -%>
@import "~@db-ui/core/sources/_patterns/00-base/icons/enterprise/icons.scss";
<% } -%>

