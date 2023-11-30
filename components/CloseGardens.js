import React ,  {  useState , useEffect}  from 'react';
import {View , StyleSheet , Image, Pressable, Text, ImageBackground, Button} from 'react-native';

function CloseGardens({showClosest , setShowClosest , navigation , mobileWidth , width}) {

  const [currentPoint, setCurrentPoint] = useState(0);

  

  const styles = handleStyles(mobileWidth);

  useEffect(() => {
    console.log(width)
    if(width > 768){
        setShowClosest(true)
    }
  } , [width])

  function showIndex(direction) {
    switch (direction) {
      case 'down':
        setCurrentPoint(currentPoint + 5);
        break;
      case 'up':
        setCurrentPoint(currentPoint - 5);
        break;
      default:
        break;
    }
  }
  
    return (
        
             <View className="close-gardens" style={showClosest ? styles.container : {display : 'none'}}>
                <View style={styles.showMapButtonContainer}>
                    <Pressable  onPress={() => setShowClosest(false)}><Text style={styles.showMapButton}>Show Beergarden Map</Text></Pressable>
                </View>
                <View style={styles.gardensContainer}>

                {closeGardens
                    .slice(currentPoint, currentPoint + 5)
                    .sort((a, b) => a.distance - b.distance)
                    .map((data) => (
                    <View key={data.id} style={styles.garden} onClick={() => navigation.navigate('BiergardenDetails' , {title : data.title , id: data.id , distance: data.distance})}>
                        <ImageBackground style={styles.gardenContainer} source={require('../assets/img/close-bgarden-back.svg')}>

                            <Text className="name" style={styles.distanceAndName}>{data.title}</Text>
                            <View className="distance" style={styles.distanceAndName}>
                            <img
                                style={styles.icon}
                                src={require("../assets/img/small-location.svg")}
                                alt=""
                            />
                            <Text>

                            {data.distance > 1000
                                ? `${(data.distance / 1000).toFixed(0)} km`
                                : `${data.distance.toFixed()} m`}
                            </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    ))}
                </View>
                {currentPoint > 0 && (
                    <Pressable
                    type="button"
                    style={[styles.buttonArrow ,  {top: 0}]}
                    onPress={() => showIndex('up')}
                    >
                    <Text>

                    &#x2191;
                    </Text>
                    </Pressable>
                )}
                {currentPoint + 5 <= closeGardens.length && (
                    <Pressable
                    type="button"
                    style={[styles.buttonArrow ,  {bottom: 0 }]}
                    onPress={() => showIndex('down')}
                    >
                    <Text>

                    &#x2193;
                    </Text>
                    </Pressable>
                )}
                </View>
       
    );
}

export default CloseGardens;

function handleStyles(mobileWidth){

    return StyleSheet.create({
        container: {
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.911)',
            zIndex: 8,
            opacity: 0.9,
            width: mobileWidth ? '100%' : '20%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: mobileWidth ? '1rem' : 0
        },
        gardensContainer: {
            marginTop: mobileWidth ? '1rem' : 0,
            display: 'flex',
            flexDirection: "column",
            height: '100%',
            gap: mobileWidth ? '1rem' : 0
        },
        gardenContainer: {
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'spaceBetween',
            alignItems:'flexEnd',
            padding: '.5rem',
            height: '100%',
            gap: '1rem',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            color: 'white'
    
        },
        garden: {
            height: mobileWidth ? '17%' : "20%",
            gap: '1rem'
        },
        icon : {
            display: 'flex',
            height: 'fit-content',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent:"center",
            width: '100%',
        },
        buttonArrow: {
            textAlign: 'center',
            display: 'flex',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            width: '3.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color : 'white'
        },
        showMapButtonContainer: {
            display: mobileWidth ? 'block' : 'none',
            alignSelf: 'center',
        },
        showMapButton : {
            width: 'fit-content',
            shadowColor: 'none',
            fontSize: '1rem',
            padding: '.7rem',
            borderTopLeftRadius: 8 ,
            borderTopRightRadius: 8 ,
            backgroundColor: '#8b8b8b',
            color: 'white',
            fontWeight: "bold",
            letterSpacing: '2px'
        },
        distanceAndName : {
            color: 'white',
            shadowColor: 'black',
            height: '40px',
            display: 'flex',
            gap: '.4rem',
            textShadow: 'rgb(124, 124, 124)',
            textOverflow: 'ellipsis',
            overflow: 'hidden', 
            whiteSpace: 'nowrap'
        }
        
      });
}
const closeGardens = [
    {
        id: 1,
        title: "Title 1",
        distance : 3574
    },
    {
        id: 2,
        title: "Title 2",
        distance : 864
    },
    {
        id: 3,
        title: "Title 3",
        distance : 353
    },
    {
        id: 4,
        title: "Title 4",
        distance : 53
    },
    {
        id: 5,
        title: "Title 5",
        distance : 162
    },
    {
        id: 6,
        title: "Title 6",
        distance : 234
    },
]
