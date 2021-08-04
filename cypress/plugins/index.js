/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const truncateTables = require('../../test/truncate-tables.js')
const createTable = require('./../../test/create-table.js')
const updateTest = require('./../../test/update-table.js')

module.exports = (on, config) => {

  on('task', {
    taskTruncateTables() {
      console.log('running truncateTables')
      truncateTables()
      return null
    },

    taskCreateTable(){
      console.log('creating table')
      createTable()
      return null
    },

    taskUpdateTable(){
      console.log('updating table')
      updateTest()
      return null
    }
  })
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
