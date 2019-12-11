var faker = require( 'faker' );

const createTopics = ( amount = 31 ) => {
    let mockTopics = [ 'Economics', 'Politics', 'Conspiracy', 'Philosophy', 'Artificial Intelligence', 'Psychology' ];
    let topics = [];

    while ( amount > 0 ) {
        let topic = {
            title: mockTopics[ amount ] || faker.commerce.department(),
        };
        topics.push( topic );
        amount --;
    }
    return topics;
}
export let topics = createTopics();

const createNotifications = ( amount = 10 ) => {
    let actions = [ 'protested', 'extended', 'commented', 'reacted', 'shared' ];
    let objects = [ 'post', 'comment', 'resource' ];
    let notifications = [];

    while ( amount > 0 ) {
        let notif = {
            person: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            action: actions[ faker.random.number( actions.length ) ],
            object: objects[ faker.random.number( objects.length ) ],
            // time: faker.date.recent()
        };
        notifications.push( notif );
        amount --;
    }
    return notifications;
}
export let notifications = createNotifications();

const createPosts = ( amount = 20 ) => {
    let posts = [];
    while ( amount > 0 ) {
       let post = {
            content: faker.lorem.paragraphs( 3 ),
            protestCount: 1,
            commentCount: 1,
            extensionCount: 1,
            reactionsCount: 20,
            avatar: faker.image.avatar(),
            username: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
        }
        posts.push( post );
        amount --;
    }
    return posts;
}
export let posts = createPosts();

const createResources = ( amount = 20 ) => {
    let resources = [];
    while ( amount > 0 ) {
       let resource = {  
            name: 'Yanna Faith',
            alignmentScore: '70',
            classification: 'supporter',
            requestDate: '12/31/1997',
            decisionDate: '12/31/1997',
        }
        resources.push( resource );
        amount --;
    }
    return resources;
}
export let resources = createResources();

const createNetwork = ( amount = 20 ) => {
    let people = [];
    while ( amount > 0 ) {
       let node = {  
            name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            alignmentScore: '65',
            classification: 'supporter',
            requestDate: '12/31/1997',
            decisionDate: '12/31/1997',
        }
        people.push( node );
        amount --;
    }
    return resources;
}
export let peopleNetwork = createNetwork();

const createComments = ( amount = 20 ) => {
    let comments = [];
    while ( amount > 0 ) {
       let comment = {
        content: faker.lorem.paragraphs( 1 ),
        protestCount: 1,
        commentCount: 1,
        extensionCount: 1,
        reactionsCount: 20
    }
        comments.push( comment );
        amount --;
    }
    return resources;
}
export let comments = createComments();


/* 

adult relationships article shared by steven paul king, most people will probably only have one sphere, but the most evolved will have many, and will even consciously try to have several. These would be good admin.

worldview will get updated every so often, serves as an incentive for users to write in a broader spectrum of topics, to make the worldview algorithm more accurate.

    Economy/Money

Market
Exchange Rates
Crypto Currency
Forecasts
Mind

Cognitive Science
Neuroscience
Psychology
Psychiatry/Mental Health
Intelligence
Artificial Intelligence
Donald King
Maths

Applied 
Theoretical
Ridiculous and/or Debunked
Engineering

Electrical Engineering
Software Engineering
Mechanical Engineering
Robotics Engineering
Chemical Engineering
Civil Engineering
Management Engineering
Religion

Theism
Atheism
Secularism
Scientism


?? Secret societies of people with so many divergent identities that they are fractured in regular usage? 


*/