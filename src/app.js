export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
      // { route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' },
      { route: 'sales', name: 'sales', moduleId: './sales-cr/index', nav: true, title: 'sales' },
      { route: 'report-sales-payment', name: 'report-sales-payment', moduleId: './report-sales-payment/index', nav: true, title: 'report sales payment' },
      { route: 'report-payment-method', name: 'report-payment-method', moduleId: './report-payment-method/index', nav: true, title: 'report payment method' },
      { route: 'report-sales-payment.1', name: 'report-sales-payment.1', moduleId: './report-sales-payment.1/index', nav: true, title: 'void sales' },
      
    ]);

    this.router = router;
  }
}
