import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | visualizations/vertical-bar-chart', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{visualizations/vertical-bar-chart}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#visualizations/vertical-bar-chart}}
        template block text
      {{/visualizations/vertical-bar-chart}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
