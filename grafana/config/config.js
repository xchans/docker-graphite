define(['settings'],
function (Settings) {
  return new Settings({
    //elasticsearch: "http://"+window.location.hostname+":9200",
    datasources: {
      graphite: {
        type: 'graphite',
        url: 'http://GRAPHITE_HOST:GRAPHITE_PORT',
        default: true,
        render_method: 'GET'
      }
    },
    default_route: '/dashboard/file/default.json',
    unsaved_changes_warning: true,
    playlist_timespan: "1m",
    admin: {
      password: ''
    },
    grafana_index: "grafana-dash",
    panel_names: ['text','graphite']
  });
});