import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var areaChartData = {"job_id": 4119, "task_id": "51e30b89-6db2-4922-ba2c-caebe9d000a9", "title": "Sobreviventes por classe", "data": [{"name": "2nd", "color": "#506FBB", "value": 119.0, "label": "2nd", "x": 119.0, "id": "class_0"}, {"name": "1st", "color": "#3FA8AD", "value": 200.0, "label": "1st", "x": 200.0, "id": "class_1"}, {"name": "3rd", "color": "#71AD3F", "value": 181.0, "label": "3rd", "x": 181.0, "id": "class_2"}], "tooltip": {"body": ["<span class='metric'></span><span class='number'>{{name}}</span>"], "title": ["{{name}}"]}, "x": {"suffix": null, "title": null, "color": "#222", "format": null, "value": "sum", "prefix": null}, "type": {"icon": "fa-pie-chart", "id": 70, "name": "pie-chart"}, "legend": {"text": "{{name}}", "isVisible": true}};

    return areaChartData;
  },
  setupController(controller, model){
    console.log('model', model);
    controller.set('viz',
      {
        component: "visualizations/pie-chart",
        dataUrl: "https://dev.ctweb.inweb.org.br/caipirinha/visualizations/707/473ca4f7-75b8-4980-a728-b71c6070e3e8",
        height: 3,
        id: 761,
        job_id: 707,
        resizeIndex: 0,
        suggested_width: 12,
        task_id: "473ca4f7-75b8-4980-a728-b71c6070e3e8",
        title: "Tipos de Documento",
        type: {
          help: "Pie Chart",
          icon:"fa-pie-chart",
          id: 70,
          name:"pie-chart"
        },
        width: 2,
        x: 10,
        y: 12,
      });
    this._super(...arguments);
  }
})

