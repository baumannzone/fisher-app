import Vue from 'vue';
import Crear from '@/components/Crear';

describe( 'Crear.vue', () => {
  it( 'should render correct contents', () => {
    const Constructor = Vue.extend( Crear );
    const vm = new Constructor().$mount();
    expect( vm.$el.querySelector( '.h1' ).textContent )
      .to.equal( 'Crear' );
  } );
} );
