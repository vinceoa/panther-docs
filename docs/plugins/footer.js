function install(hook) {

  var footer = [
    '<hr/>',
    '<footer class="footer">',
    '<span class="license">All copyright and other rights in this documentation and the licensed programs described in this documentation are the property of Open Answers Ltd unless otherwise stated.',
    ' No part of it may be reproduced or communicated to any third party, without express written permission of Open Answers Ltd.</span>',
    '<span class="copyright">&copy; Open Answers Ltd 2019</span>',
    '</footer>'
  ].join('');

  hook.afterEach(function(html) {
    return html + footer;
  })
}

$docsify.plugins = [].concat(install, $docsify.plugins)
