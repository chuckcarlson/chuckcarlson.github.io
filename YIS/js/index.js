/// SCORE
////////////////////////////////////////////////
////////////////////////////////////////////////

var h = $( window ).height();
var w = $( window ).width();
var centerW = ($( window ).width()/2);
var centerH = ($( window ).height()/2);

var fired = false,
    fired2 = false,
    fired3 = false,
    fired4 = false,
    hScale = 1 + (h*.0005);

$('.count').each(function () {
  var score = 200;
    $(this).prop('Counter',0).animate({
        Counter: score
    }, {
        duration: 5000,
        easing: 'easeOutCubic',
        step: function (now) {
            scoreAdd = Math.ceil(now);
            $(this).text(scoreAdd);
        if ((scoreAdd > 100)  && !fired){
            scoreA();
            fired = true;
          }
          if ((scoreAdd > 160)  && !fired2){
            scoreB();
            fired2 = true;
          }
          if ((scoreAdd > 180)  && !fired3){
            scoreC();
            fired3 = true;
          }
          if ((scoreAdd >= 200)  && !fired4){
            scoreD();
            fired4 = true;
          }
        }     
    });
});

/// MATTER.JS
////////////////////////////////////////////////
////////////////////////////////////////////////

var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Vertices = Matter.Vertices,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: w,
            height: h,
            wireframes: false,
            showBounds: false,
            showVelocity: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);
  
    // SVG lines
    var triangle = Vertices.fromPath('0 0 50 100 0 50 -50 100');
    var hex = Vertices.fromPath('75,37.5 56.25,70 18.75,70 0,37.5 18.75,5 56.25,5');
    var star = Vertices.fromPath('9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78');
    
    var body1 = Bodies.fromVertices(centerW, 200, triangle, { 
                render: {
                  fillStyle: '#4285f4',
                  strokeStyle: 'transparent',
                  lineWidth: 0
                },
                  density: 5,
                  friction: 1
                }),
        body2 = Bodies.rectangle(centerW, 100, 150, 20, {  
                render: {
                  fillStyle: '#eeeeee',
                  strokeStyle: 'transparent',
                  lineWidth: 0
                },
                  density: 5,
                  friction: 1
                }),
        body3 = Bodies.rectangle(centerW, 0, 100, 50, { 
            render: {
            fillStyle: '#34a853',
            strokeStyle: 'transparent',
            lineWidth: 0
         },
            chamfer: { radius: [48, 47, 0, 0] },
            density: .001,
            friction: 10
            }),
        body4 = Bodies.rectangle(centerW, 0, 100, 50, {  
          render: {
            fillStyle: '#fbbc04',
            strokeStyle: 'transparent',
            lineWidth: 0
         },
          density: .0000001,
          friction: 1
        }),
        body5 = Bodies.fromVertices(centerW, 0, hex, { 
         render: {
            fillStyle: '#ea4335',
            strokeStyle: 'transparent',
            lineWidth: 0
         },
          density: .0000001,
          friction: 1
        }),
        body6 = Bodies.fromVertices(centerW, 0, star, { 
          render: {
            fillStyle: '#4285f4',
            strokeStyle: 'transparent',
            lineWidth: 0
         },
          density: .0000001,
          friction: 1
        });

// SCALE BODIES TO WINDOW
  Matter.Body.scale( body1, hScale, hScale);
  Matter.Body.scale( body2, hScale, hScale);
  Matter.Body.scale( body3, hScale, hScale);
  Matter.Body.scale( body4, hScale, hScale);
  Matter.Body.scale( body5, hScale, hScale);
  Matter.Body.scale( body6, hScale, hScale);


    // add bodies
    World.add(world, [ body1, body2,
        /* Bodies.rectangle(400, 0, 800, 50, { isStatic: true }), */
        Bodies.rectangle(centerW, h+25, w, 50, { isStatic: true }),
        Bodies.rectangle(w+25, centerH, 50, w, { isStatic: true }),
        Bodies.rectangle(-25, centerH, 50, w, { isStatic: true })
    ]);


    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;



/// COLLISION EVENTS 



 

// Collosion Events    


  
 // Collosion Events 

/*
  
    Matter.Events.on(engine, 'collisionStart', function(event) {
        var pairs = event.pairs;
        //var audioElement2 = document.createElement('audio');
        //audioElement2.setAttribute('src', 'https://github.com/chuckcarlson/chuckcarlson.github.io/blob/master/Audio/marimba-45.mp3?raw=true');
        

        var synthA = new Tone.MonoSynth({
  volume  : -15,
  oscillator: {
      type: 'sine',
      modulationFrequency: 0.2
    },
    envelope: {
      attack: 0,
      decay: 0.1,
      sustain: 0,
      release: 0.1,
    }
}).toMaster();
        

        for (var i = 0, j = pairs.length; i != j; ++i) {
            var pair = pairs[i];

            //console.log(pair.bodyB);

           // sound blue balls
            if (pair.bodyA == pair.bodyA) {
                synthA.triggerAttackRelease("C4", .2);
                //audioElement.play();
                //audioElement.currentTime = 0; 
                
            } 
          
            
        }
    });
 */

/// SCORE BLOCK FUNCTIONS
////////////////////////////////////////////////
////////////////////////////////////////////////
function scoreA(){
  World.add(world, [body3])
};

function scoreB(){
  World.add(world, [body4])
};

function scoreC(){
  World.add(world, [body5])
};

function scoreD(){
  World.add(world, [body6])
};