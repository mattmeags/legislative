var legislative = {

    stateObjects: [],

    states : {
        AL: 'Alabama',
        AK: 'Alaska',
        AZ: 'Arizona'

    },

    init: function() {
        //this.getStates();
        this.getData();
        this.registerHelpers();
    },
    getStates: function() {
        for (var key in legislative.states){
            console.log(key);
            console.log(legislative.states[key])
            this.getData(key);
        }
    },

    getData: function(url) {
        console.log('or is this first?');
        $.when(

            $.each(legislative.states, function(key, value){
                $.get('https://congress.api.sunlightfoundation.com/legislators?state=' + key, function(data){
                    //alert('success');
                    console.log(data);
                    legislative.stateObjects.push(data);
                })
            })
            /*$.get('https://congress.api.sunlightfoundation.com/legislators?state=IN', function(data){
                //alert('success');
                //console.log(indianaData);
                legislative.stateObjects.push(data);

            }),
            $.get('https://congress.api.sunlightfoundation.com/legislators?state=AL', function(alabamaData){
                legislative.stateObjects.push(alabamaData);
            })*/
        //fires after all of the requests in when have been made
        ).then(function(){
            console.log('is this first?');
            legislative.populate(legislative.stateObjects);
        });
    },

    registerHelpers: function() {
        Handlebars.registerHelper('if_eq', function(a, b, opts){
            if (a == b){
                return opts.fn(this);
            }else{
                return opts.inverse(this);
            }
        });
    },

    populate: function(state) {
        console.log(state.length);
        for (var i = 0; i < state.length; i++){
            var source = $("#entry-template").html(),
                //name = this.stateName(i),
                template = Handlebars.compile(source),
                html = template(state[i]);
                //alert(state[i]);
               //$('body').html(JSON.stringify(data));
                //$('#content').append(name);
                alert('step');
               $('#content').append(html);
        }

    },
    /*stateName: function(i) {
        var counter = 1;
        for (var key in legislative.states){
            counter++;
            if (counter == i) {
                return legislative.states[key];
            }
        }
    }*/

}


var indiana,
    alabama;
var states = {
    al: 'Alabama',
    ak: 'Alaska',
    az: 'Arizona',
    ar: 'Arkansas',
    ca: 'California',
    co: 'Colorado',
    ct: 'Connecticut',
    de: 'Delaware',
    fl: 'Florida',
    ga: 'Georgia',
    hi: 'Hawaii',
    id: 'Idaho',
    il: 'Illinois',
    in: "Indiana",
    ia: 'Iowa',
    ks: 'Kansas',
    ky: 'Kentucky',
    la: 'Louisiana',
    me: 'Maine',
    md: 'Maryland',
    ma: 'Massachusetts',
    mi: 'Michigan',
    mn: 'Minnesota',
    ms: 'Mississippi',
    mo: 'Missouri',
    ne: 'Nebraska',
    nv: 'Nevada',
    nj: 'New Jersey',
    nm: 'New Mexico',
    ny: 'New York',
    nc: 'North Carolina',
    nd: 'North Dakota',
    oh: 'Ohio',
    or: 'Oregon',
    pa: 'Pennsylvania',
    ri: 'Rhode Island',
    sc: 'South Carolina',
    sd: 'South Dakota',
    tn: 'Tennessee',
    tx: 'Texas',
    ut: 'Utah',
    vt: 'Vermont',
    va: 'Virginia',
    wa: 'Washington',
    wv: 'West Virginia',
    wi: 'Wisconsin',
    wy: 'Wyoming'
}

$(function (){
    legislative.init();
});
