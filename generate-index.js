const fs = require('fs');
const { components, componentsPath, mainFile } = require('./build-config.json');

const componentExports = components
  .map(c => `export { ${c} } from '${componentsPath}/${c}';`)
  .join('\n');

const fileContent = `${componentExports}\n
/* =============== THIS FILE IS AUTOGENERATED DO NOT EDIT =============== */
`;

fs.writeFile(mainFile, fileContent, err =>
  console.log(err || 'Successfully generated component index!')
);
