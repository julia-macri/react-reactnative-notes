// Layout of Folders
    // assets folder
        // put all images/audio/video files
    // App.js
        // basic React Native component
        import React from "react";

        // View is like div in web world
        // Text is used to display text on screen
            // in react native, don't have HTML elements (like paragraph, anchor, etc.)
            // have to use building blocks provided by React Native
        import { StyleSheet, Text, View, SafeAreaView } from "react-native";
        // this App is a functional component
            // return JSX expression
            // have View like div
            // has style
            // has Text component for displaying Text on screen
                // converted to native widgets (in IOS/Android setting)
            export default function App() {
                return (
                    // View -> UIView if IOS
                    // View -> AndroidView if Android
                    // platform-independent  
                    <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                    <StatusBar style="auto" />
                    </View>
                );
                }
                
                // creating styles object using StyleSheet
                // pass in an object into StyleSheet.create 
                // object has property container that includes all of style
                const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                });
                  

    // metrobundler = Javascript bundler for React native
        //  responsible for compiling all of our Javascript into single file

// RUNNING ON IOS SIMULATOR

// FUNDAMENTAL COMPONENTS
    // can also find on React Native website -> API


// VIEW
    // most basic and fundamental for building UIs
    // like div
    // container component that can be used for grouping/laying out children

    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
    return (
        // with SafeAreaView- text no longer in notch
        // SafeAreaView adds padding so doesn't hit notch 
        <SafeAreaView style={styles.container}>
        <Text>Hello React Native</Text>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container: {
            // flex set to 1
                // means that view is flexible 
                //  will grow horizontally/vertically to fill the free space
                        // grows and takes entire screen
            flex: 1,
            // background color of view is white (could also use name/RGB like "dodgerblue")
            backgroundColor: '#fff',
            // put text in middle of view
            // take about in next section
            // without it part of text covered by notch -> use SafeAreaView
                // alignItems: 'center',
                // justifyContent: 'center',
        },
        });

// TEXT
    // second most fundamental
    // use for displaying text
    // should always wrap our text with Text Component

    // interesting props
        // can see on the right of the documentation of Text on React Native website

        // numberOfLines
            // when set, if our text is longer, gets truncated
            // format: <Text numberOfLines={number}> ... </Text>
                // text will go on number lines

        // onPress 
            // can make Text act like link
            // set to function
                // arrow function useful for small function
                // if longer, define a function elsewhere
        export default function App() {
            const handlePress = () => console.log("Text pressed");
            return (
                <SafeAreaView style={styles.container}>
                {/* sets text to be on only one line */}
                <Text numberOfLines={1} onPress={handlePress}>
                    Hello React Native - A really really long text. Now I wanna make this even longer and see what happens</Text>
                </SafeAreaView>
            );
            }


// IMAGES
    // to put content in center of screen, need to set two items
        alignItems: 'center',
        justifyContent: 'center'
    // need to import {Image} from react native
        import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
        // can both display local (bundled with our app) and network (downloaded from Internet) images
    
    // format (for local file?)
        // require function returns a number that is a reference to our image
        <Image source={require(pathtoimage)}/>

        // example
            export default function App() {
                return (
                <SafeAreaView style={styles.container}>
                    {/* sets text to be on only one line */}
                    <Text> Hello React Native </Text>
                    {/* display icon right before the text */}
                    {/* packager will include file in our bundle  */}
                    {/* should probably use static imgs or images downloaded from internet */}
                    <Image source={require("./assets/icon.png")}/>
                </SafeAreaView>
                );
            }
    // format (for photo from internet?)
        // pass in object not require()
        // not enough with just URI (don't know dimensions)
        // need to manually input dimensions (for network images)
        // for local images didn't have to do because require() read metadata for our image (?)
        <Image source={{
            width: number,
            height: number,
            uri:"urlofphoto",
        }} />
        
        // example
            export default function App() {
                return (
                <SafeAreaView style={styles.container}>
                    {/* sets text to be on only one line */}
                    <Text> Hello React Native </Text>
                    {/* pass in object */}
                    {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
                    <Image source={{
                        width: 200,
                        height: 300,
                        uri:"https://picsum.photos/200/300",
                    }} />
                </SafeAreaView>
                );
            }

    // props
        // blurRadius
            // applys blur effect to image 
            <Image blurRadius={number} source =...etc... />

        // loadingIndicatorSource
            // similar to source prop
            // can give image (with uri/network)
            // image pass here will be displayed while image is being downloaded
        

        // fadeDuration 
            // only supported in Android
            // has fade effect
            // takes 300 ms
            <Image fadeDuration={1000} ...etc... />
        
        //resizeMode
            // used if our dimensions of our image are diff than the ones we specify
            // diff modes (same as those in web applications)

        // also have a bunch of events like onLoad, onLoadEnd, onLoadStart
            // can tap into diff moments when an image is being loaded

        // example
            export default function App() {
                return (
                <SafeAreaView style={styles.container}>
                    {/* sets text to be on only one line */}
                    <Text> Hello React Native </Text>
                    {/* pass in object */}
                    {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
                    <Image 
                    blurRadius={10}
                    fadeDuration={1000}
                    source={{
                        width: 200,
                        height: 300,
                        uri:"https://picsum.photos/200/300",
                    }} />
                </SafeAreaView>
                );
            }

// TOUCHABLES
    // allow user to tap on image
    // (with Text, let that happen with onPress event)
    // Image component doesn't have this event
    
    // can use touchable components to make anything touchable

    // touchable components in React Native
        // TouchableHighlight
        // TouchableOpacity
        // TouchableWithoutFeedback
        // which one we use depends on kind of feedback want to give to our users

    // have to import
        // can use shortcuts
            // e.x. TouWF

    // to make image touchable, have to wrap it inside a toucable (e.x. TouchableWithoutFeedback) component

    // TouchableWithoutFeedback has an event onPress and onLongPress (useful when want user to tap and hold component (?))
        
    // TouchableWithoutFeedback- nothing happens on screen because doesn't give us feedback

    // TouchableWithoutFeedback example
        import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback} from 'react-native';

        export default function App() {
        return (
            <SafeAreaView style={styles.container}>
            {/* sets text to be on only one line */}
            <Text> Hello React Native </Text>
            {/* pass in object */}
            {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
            <TouchableWithoutFeedback onPress ={() => console.log("Image tapped")}>
                <Image 
                    blurRadius={10}
                    fadeDuration={1000}
                    source={{
                        width: 200,
                        height: 300,
                        uri:"https://picsum.photos/200/300",
                    }} />
            </TouchableWithoutFeedback> 
            </SafeAreaView>
        );
        }

    // TouchableOpacity
        // when touch image, image disappears so can see background
        // for a fraction of second, reduces opacity of what making touchable

        // example
            import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

            export default function App() {
            return (
                <SafeAreaView style={styles.container}>
                {/* sets text to be on only one line */}
                <Text> Hello React Native </Text>
                {/* pass in object */}
                {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
                <TouchableOpacity onPress ={() => console.log("Image tapped")}>
                    <Image 
                        blurRadius={10}
                        fadeDuration={1000}
                        source={{
                            width: 200,
                            height: 300,
                            uri:"https://picsum.photos/200/300",
                        }} />
                </TouchableOpacity> 
                </SafeAreaView>
            );
            }

    // TouchableHighlight
        // when tap, background gets dark for a second

        // example
            import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight} from 'react-native';

            export default function App() {
            return (
                <SafeAreaView style={styles.container}>
                {/* sets text to be on only one line */}
                <Text> Hello React Native </Text>
                {/* pass in object */}
                {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
                <TouchableHighlight onPress ={() => console.log("Image tapped")}>
                    <Image 
                        blurRadius={10}
                        fadeDuration={1000}
                        source={{
                            width: 200,
                            height: 300,
                            uri:"https://picsum.photos/200/300",
                        }} />
                </TouchableHighlight> 
                </SafeAreaView>
            );
            }

    // TouchableNativeFeedback
        // unique to Android (can't use on IOS)

        // nothing happens with images
        // works with views with a background color

        // example with images - nothing happens
            import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

            export default function App() {
            return (
                <SafeAreaView style={styles.container}>
                {/* sets text to be on only one line */}
                <Text> Hello React Native </Text>
                {/* pass in object */}
                {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
                <TouchableNativeFeedback onPress ={() => console.log("Image tapped")}>
                    <Image 
                        blurRadius={10}
                        fadeDuration={1000}
                        source={{
                            width: 200,
                            height: 300,
                            uri:"https://picsum.photos/200/300",
                        }} />
                </TouchableNativeFeedback> 
                </SafeAreaView>
            );
            }
        // example (with View)
            import { StatusBar } from 'expo-status-bar';
            import React from 'react';
            import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
            
            export default function App() {
            return (
                <SafeAreaView style={styles.container}>
                {/* sets text to be on only one line */}
                <Text> Hello React Native </Text>
                {/* pass in object */}
                {/* not enough with just uri - image not visible because react native doesn't know dimensions*/}
                <TouchableNativeFeedback onPress ={() => console.log("Image tapped")}>
                    <View style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
                </TouchableNativeFeedback> 
                </SafeAreaView>
            );
            }
            
            const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            });



// BUTTON
    // Button component
    // add Button to view

    // self-closing syntax: <Button ... />

    // can have title (text that appears where button is (what click on))

    // color (set button's color)

    // onPress - have function with what happens when press button

    // button looks diff on Android vs IOS

    // example
        import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button} from 'react-native';

        export default function App() {
        return (
            <SafeAreaView style={styles.container}>
                <Button 
                color = "orange"
                title="Click Me" onPress = {() => console.log("Button tapped")} />
            </SafeAreaView>
        );
        }

// ALERT
    // instead of printing something on console
    // display standard alert box
    // use alert() function (like that one in worsers)

    // get standard IOS alert box- get diff one on Android

    // format: alert("messageofalert")

    // basic example (warning with Alert heading)
        export default function App() {
            return (
            <SafeAreaView style={styles.container}>
                <Button 
                    color = "orange"
                    title="Click Me" onPress = {() => alert("Button tapped")} />
            </SafeAreaView>
            );
        }

    // get box with title "Alert" and OK button
    // can customize: change button/title

        // import Alert (not component that has visual representation- is API (with couple of methods?))

        // Alert.alert: display message
            // format
                // every button can have text, style, onPress, ...
                Alert.alert("My title", "My message", [{text: "...", onPress: ()=> functioncode }, arrayofbuttons...])
            
            // example
                import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';

                export default function App() {
                return (
                    <SafeAreaView style={styles.container}>
                        <Button 
                        color = "orange"
                        title="Click Me" onPress = {() => 
                            Alert.alert("My title", "My message", [
                            {text: "Yes", onPress: ()=> console.log("Yes")},
                            {text: "No", onPress: ()=> console.log("No")},
                            ])
                            }
                        />
                    </SafeAreaView>
                );
                }


        // Alert.prompt: for asking question and get answer
            // only works in IOS (not Android)
            // format:
                Alert.prompt("My title", "My message", callback function or buttons)

            // example
                import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';

                export default function App() {
                return (
                    <SafeAreaView style={styles.container}>
                        <Button 
                        color = "orange"
                        title="Click Me" 
                        onPress = {() => 
                            // text: text that user types in box
                            Alert.prompt("My title", "My message", text => console.log(text))
                            }
                        />
                    </SafeAreaView>
                );
                }


// STYLESHEET
    // StyleSheet API
    // styles here not CSS but names inspired by CSS (just regular Javascript)

    // styles.container is regular Javascript object

    // example (old code)
        import { StatusBar } from 'expo-status-bar';
        import React from 'react';
        import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';
        
        export default function App() {
        return (
            <SafeAreaView style={styles.container}>
                <Button 
                color = "orange"
                title="Click Me" 
                onPress = {() => 
                    // text: text that user types in box
                    Alert.prompt("My title", "My message", text => console.log(text))
                    }
                />
            </SafeAreaView>
        );
        }
        
        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        });

    // instead of styles.container- could pass in in-line style

        import { StatusBar } from 'expo-status-bar';
        import React from 'react';
        import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';

        export default function App() {
        return (
            <SafeAreaView style={{backgroundColor: "orange"}}>
                <Button 
                color = "orange"
                title="Click Me" 
                onPress = {() => 
                    // text: text that user types in box
                    Alert.prompt("My title", "My message", text => console.log(text))
                    }
                />
            </SafeAreaView>
        );
        }

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        });

    // can also define object (inline element?) somewhere else
        import { StatusBar } from 'expo-status-bar';
        import React from 'react';
        import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';
        
        export default function App() {
        return (
            <SafeAreaView style={containerStyle}>
                <Button 
                color = "orange"
                title="Click Me" 
                onPress = {() => 
                    // text: text that user types in box
                    Alert.prompt("My title", "My message", text => console.log(text))
                    }
                />
            </SafeAreaView>
        );
        }
        
        const containerStyle = {backgroundColor: "orange"};
        
        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        });

    // styles.container = object that pass into StyleSheet.create()

    // whatever pass into StyleSheet.create() we get it as a result (?)
    
    // reasons for using StyleSheet.create() instead of just creating an object
        // 1. method validates properties use (ensures that we don't misspell a property (e.x. backgroundColore))
            // don't get errors if misspell object's property 

        // 2. recommended practice (for optimization?)

        // can combine multiple style objects
            // can pass in an array of objects
            // like how can combine multiple CSS classes to HTML element
                // but here more predictable
            // object on right overrides properties of object on left
            style = {[styles.container, containerStyle]}

        // full example
            import { StatusBar } from 'expo-status-bar';
            import React from 'react';
            import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';
            
            export default function App() {
            return (
                <SafeAreaView style = {[styles.container, containerStyle]}>
                    <Button 
                    title="Click Me" 
                    onPress = {() => console.log("button pressed")}
                    />
                </SafeAreaView>
            );
            }
            
            // overriding background color put in styles.container
            const containerStyle = {backgroundColor: "orange"};
            
            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            });


    // don't have to put styles in same file
    // can put in separate file and import into this file
    // but conventional to define styles below component
        // because have to work with structure/styles of component together


// PLATFORM-SPECIFIC CODE
    // there are times when need to detect platform app is running in
    // and customize some styles/behavior

    // Platform module
        import {Platform} from "react-native"

    // refer with Platform.propertyname

    // Platform.OS - retuns operating sys (Android, IOS, etc.)
        // can return "android", "ios", "macos", "web", "windows"
    // Platform.Version- can get version of our platform
    // can also check if ipad, tv, etc. 

    // example
        // when don't make it in the center, Android/IOS put it in diff places
            // IOS- on top (not on status bar)
            // on Android, on status bar
        // SafeAreaView only works for IOS
            // making sure content doesn't go over notch
            // doesn't affect Android
        // so, need to add some padding manually to Android device to push button down - so not on
        // where use Platform module

        // want to set paddingTop dynamically
            // 20 if Android, 0 if not 

        // to add padding correctly, need to use StatusBar.currentHeight
            // first need to import StatusBar
                import {StatusBar} from "react-native"


        import React from 'react';
        import { StatusBar, StyleSheet, PlatformModule, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';
        
        export default function App() {
        return (
            <SafeAreaView style = {styles.container}>
                <Button 
                title="Click Me" 
                onPress = {() => console.log("button pressed")}
                />
            </SafeAreaView>
        );
        }
        
        
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                // want to set paddingTop dynamically
                    // 20 if Android, 0 if not 
                    // use height of status bar as value for this step
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            },
        });

// LAYOUTS


// DIMENSIONS
    // import View component
    
    // numbers marking height/width without unit (?) = Density-independent Pixels (DiPs)
        // actual size: Physical Pixels = DIPS * scale factor (of device)

        // by expressing it this way, can be comfortable look approx same across all objects

    // example  
        export default function App() {
            return (
                <SafeAreaView style = {styles.container}>
                    <View style = {{
                        backgroundColor: "dodgerblue",
                        // numbers here are Density-independent Pixels
                        width: 150,
                        height: 70
                    }}>
            
                    </View>
                </SafeAreaView>
            );
            }

    // if want to make sure width is exactly half of screen, use percentages
        // put in quotes because is string value

        // example
            export default function App() {
                return (
                    <SafeAreaView style = {styles.container}>
                        <View style = {{
                            backgroundColor: "dodgerblue",
                            // numbers here are Density-independent Pixels
                            width: "50%",
                            height: 70
                        }}>
                
                        </View>
                    </SafeAreaView>
                );
                }


    // in some cases, want to fine tune size of component according to size of screen
        //  -> use Dimensions  API

        import {Dimensions} from "react-native"

        // Dimensions.get("window")
                // returns size of visible application window

        // Dimensions.get("screen")
                // returns size of entire screen

        // on IOS, Dimensions.get("window") = Dimensions.get("screen")
        // only diff on Android: window size < screen size

        // can print Dimensions.get("window") or Dimensions.get("screen") to see height/width, scale factor (and fontScale)

        // problem with Dimensions API: doesn't respond to orientation changes
                // don't get updated when rotate etc (?)


// DETECTING ORIENTATION CHANGES
    // there are times when want to detect screen orientation  adn resize component accordingly

    // in portrait mode, want videoplayer on top
    // in landscape mode, want it to take up entire screen

    // IOS: cmd + left/right arrows to rotate

    // in app.json, by default, orientation is "portrait"
        // so only supports portrait mode

        // can also set to "default" to support both modes

    // use hooks

    // first, download this hooks library npm i @react-native-community/hooks
        

    // useDimensions (for some reason doesn't work on my computer)
        import {useDimensions} from "@react-native-community/hooks"; 
        // with this hook, can get correct dimensions of the screen whether in portrait/landscape mode
            // always returns updated Dimensions
            // one of limitations of Dimensions in react-native

        // preferred way to get dimensions of screen if accept any orientation of screen

        import React from 'react';
        import { Dimensions, StatusBar, StyleSheet, PlatformModule, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';
        import { useDimensions } from "@react-native-community/hooks";

        export default function App() {
            console.log(useDimensions());
            return (
                <SafeAreaView style = {styles.container}>
                    <View style = {{
                        backgroundColor: "dodgerblue",
                        // numbers here are Density-independent Pixels
                        width: "100%",
                        height: "30%"
                    }}>

                    </View>
                </SafeAreaView>
            );
        }


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                // want to set paddingTop dynamically
                    // 20 if Android, 0 if not 
                    // use height of status bar as value for this step
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            },
        });
    // useDeviceOrientation()
        // import { useDeviceOrientation} from "@react-native-community/hooks"
        // returns object with two properties landscape and portrait (true/false) (change as rotate screen)

        // could call function and store result in orientation object
            const orientation = useDeviceOrientation();

        // or could use object destructuring
            // pick landscape property from object
            const {landscape} = useDeviceOrientation();

        // now can calculate height dynamically
        // in landscape, takes up whole screen
        import React from 'react';
        import { Dimensions, StatusBar, StyleSheet, PlatformModule, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert} from 'react-native';
        import { useDeviceOrientation } from "@react-native-community/hooks";

        export default function App() {
            const {landscape} = useDeviceOrientation();
            return (
                <SafeAreaView style = {styles.container}>
                    <View style = {{
                        backgroundColor: "dodgerblue",
                        // numbers here are Density-independent Pixels
                        width: "100%",
                        // now can calculate height dynamically
                        height: landscape ? "100%" : "30%",
                    }}>

                    </View>
                </SafeAreaView>
            );
        }

// FLEXBOX
    // with flex, can easily build complex layouts that work consistently across diff screen types

    // when set flex to one, view grows to take availabel free space

    // if flex=0.5, takes up half of screen
        
    // with flex, we typically set up a view as container and then align children inside that container


    // example
        import React from "react";
        import { View } from "react-native";
        export default function App() {
            return (
                // inside container, has another view that fills its container
                // -> entire screen is blue
                <View style={{
                    backgroundColor: "#fff",
                    // if flex =1, takes up whole screen
                    // if flex=0.5, takes up half of screen
                    flex: 0.5,
                }}
                >  
                    <View 
                        style={{
                            backgroundColor: "dodgerblue",
                            flex: 1,
                        }}
                    />
                
                </View>
            );

        // example
            import React from "react";
            import { View } from "react-native";
            export default function App() {
                return (
                    // now View divided into 3 segments
                    // each view is tkaing 1/3 of its container or 1/3 of the screen
                    <View style={{
                        backgroundColor: "#fff",
                        // if flex =1, takes up whole screen
                        // if flex=0.5, takes up half of screen
                        flex: 1,
                    }}
                    >  
                        <View 
                            style={{
                                backgroundColor: "dodgerblue",
                                flex: 1,
                            }}
                        />
                        <View 
                            style={{
                                backgroundColor: "gold",
                                flex: 1,
                            }}
                        />
                        <View 
                            style={{
                                backgroundColor: "tomato",
                                flex: 1,
                            }}
                        />
                    
                    </View>
                );
            }

    //example
        import React from "react";
        import { View } from "react-native";
        export default function App() {
            return (
                
                <View style={{
                    backgroundColor: "#fff",
                    // if flex =1, takes up whole screen
                    // if flex=0.5, takes up half of screen
                    flex: 1,
                }}
                >  
                    {/* now blue view = twice as big as the other views */}
                    {/* essentially dividing the view into 4 segments: 2 to blue, 1 to gold (1/4), 1 to tomato (1/4) */}
                    <View 
                        style={{
                            backgroundColor: "dodgerblue",
                            flex: 2,
                        }}
                    />
                    <View 
                        style={{
                            backgroundColor: "gold",
                            flex: 1,
                        }}
                    />
                    <View 
                        style={{
                            backgroundColor: "tomato",
                            flex: 1,
                        }}
                    />
                
                </View>
            );
        }

// FLEXDIRECTION

    // give View fixed size

    // Views laid out vertically in column by default
        // makes sense in mobile apps because typically hold phone in portrait mode
        // opposite to default in CSS (laid out horizontally)

    // to lay out horizontally, go to container
        // set flexDirection to "row"
            // main/primary axis is horizontal axis
            // cross axis = vertical axis
            flexDirection: "row",

            // example
                export default function App() {
                    return (
                        
                        <View style={{
                            backgroundColor: "#fff",
                            flexDirection: "row",
                            flex: 1,
                        }}
                        >  
                            
                            <View 
                                style={{
                                    backgroundColor: "dodgerblue",
                                width: 100,
                                height: 100
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "gold",
                                    width: 100,
                                    height: 100
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "tomato",
                                    width: 100,
                                    height: 100
                                }}
                            />
                        
                        </View>
                    );
                }
                
            
            

        // also have "row-reverse" (right to left)
            flexDirection: "row-reverse",

        // also have "column-reverse" (bottom to top)
             flexDirection: "column-reverse",

        // ("column" = default)

// JUSTIFYCONTENT, ALIGNITEMS, ALIGNSELF

    // will talk about aligning items in our container

    // currently our items or views are appearing at left top corner of screen


    // justifyContent
        justifyContent: "center"
            // align items across main/primary axis
            
            // example: center horizontally
                import React from "react";
                import { View } from "react-native";
                export default function App() {
                    return (
                        // items appear at center of horizontal axis
                        <View style={{
                            backgroundColor: "#fff",
                            flexDirection: "row", // horizontal (=main)
                            justifyContent: "center", //main
                            flex: 1,
                        }}
                        >  
                            {/*  */}
                            <View 
                                style={{
                                    backgroundColor: "dodgerblue",
                                width: 100,
                                height: 100
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "gold",
                                    width: 100,
                                    height: 100
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "tomato",
                                    width: 100,
                                    height: 100
                                }}
                            />
                        
                        </View>
                    );
                }

            // example: center vertically
                export default function App() {
                    return (
                        // items appear at center of horizontal axis
                        <View style={{
                            backgroundColor: "#fff",
                            flexDirection: "column", // vertical (=main)
                            justifyContent: "center", //main
                            flex: 1,
                        }}
                        >  
                            {/*  */}
                            <View 
                                style={{
                                    backgroundColor: "dodgerblue",
                                width: 100,
                                height: 100
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "gold",
                                    width: 100,
                                    height: 100
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "tomato",
                                    width: 100,
                                    height: 100
                                }}
                            />
                        
                        </View>
                    );
                }

        justifyContent: "flex-end"
            // items appearing at end of main axis

            // example: items appearing at end of horizontal axis
                <View style={{
                    backgroundColor: "#fff",
                    flexDirection: "row", // horizontal (=main)
                    justifyContent: "flex-end", //main
                    flex: 1,
                }}
        
            

        justifyContent: "flex-start"
            // default value

        

        // 3 properties for distributing space
            justifyContent: "space-around"
                // space between each item is equal
                // but space between first/last item and edge of screen is not the same as space between items
                
            justifyContent: "space-evenly"
                // space distributed evenly between items (even with edges of screen)

            justifyContent: "space-between"
                // first and last items pushed to edges of screen
                // remaining space is distributed between the other items

    // alignItems
        // align items across the secondary axis
        // secondary axis 
            // vertical axis if flexDirection: "row"
            // vice versa for other

        alignItems: "center"
           // items in center of secondary axis

        alignItems: "baseline"
            // can be seen with differing height/width
            // start at same place at bottom/left baseline

        alignItems: "flex-end"
            // items appear at end of secondary axis

        alignItems: "flex-start"
            // items start at start of secondary axis (very top/left)

        alignItems: "stretch"
            // don't see unless don't have height/width (dep on flexDirection)
            // takes up entire secondary axis
            // DEFAULT value

    // alignSelf
        // do if want to change alignment of ONE of the items in the container

        // still depends on secondary axis
        // same properties as alignItems (I believe)

// FLEXWRAP AND ALIGNCONTENT
    // if have fixed values for height/width
        // if add item that can't fit on screen
        // the first item will be shrunk along with that one 
        // so each item can fit on screen
        // default 

        // example
            export default function App() {
                return (
                    // items appear at center of horizontal axis
                    <View style={{
                        backgroundColor: "#fff",
                        flexDirection: "row", // horizontal (=main)
                        justifyContent: "center", //main
                        alignItems: "baseline",
                        flex: 1,
                    }}
                    >  
                    
                        <View 
                            style={{
                                backgroundColor: "dodgerblue",
                            width: 100,
                            height: 100,
                            }}
                        />
                        <View 
                            style={{
                                backgroundColor: "gold",
                                width: 100,
                                height: 100,
                            }}
                        />
                        <View 
                            style={{
                                backgroundColor: "tomato",
                                width: 100,
                                height: 100,
                            }}
                        />
                    
                        <View 
                            style={{
                                backgroundColor: "grey",
                                width: 100,
                                height: 100,
                            }}
                        />
                    
                        <View 
                            style={{
                                backgroundColor: "greenyellow",
                                width: 100,
                                height: 100,
                            }}
                        />
                    
                    </View>
                );
            }

    // change behavior by enabling wrapping
    // flexWrap
        flexWrap: "nowrap"
            // default value

        flexWrap: "wrap"
            // view that can't fit will appear on second row (not in line with other items)
            // first item is no longer shrunk

            // example
                // but wanted these items to be vertically in the center of the screen
                    // when enable wraping, alignItems property acts differently
                    // if have multiple lines, the alignItems property determines alignment of items in each line
                         
                export default function App() {
                    return (
                        // items appear at center of horizontal axis
                        <View style={{
                            backgroundColor: "#fff",
                            flexDirection: "row", // horizontal (=main)
                            justifyContent: "center", //main
                            alignItems: "center",
                            flexWrap: "wrap",
                            flex: 1,
                        }}
                        >  
                        
                            <View 
                                style={{
                                    backgroundColor: "dodgerblue",
                                width: 100,
                                height: 100,
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "gold",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "tomato",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                            <View 
                                style={{
                                    backgroundColor: "grey",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                            <View 
                                style={{
                                    backgroundColor: "greenyellow",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                        </View>
                    );
                }

            // but wanted these items to be vertically in the center of the screen
                // when enable wraping, alignItems property acts differently
                // if have multiple lines, the alignItems property determines alignment of items in each line
            
            // (with wrap?) alignItems determines alignment of items along secondary axis within each line 
            
            // for example, within each line, items are vertically centered
                export default function App() {
                    return (
                        // items appear at center of horizontal axis
                        <View style={{
                            backgroundColor: "#fff",
                            flexDirection: "row", // horizontal (=main)
                            justifyContent: "center", //main
                            alignItems: "center",
                            flexWrap: "wrap",
                            flex: 1,
                        }}
                        >  
                        
                            <View 
                                style={{
                                    backgroundColor: "dodgerblue",
                                width: 100,
                                height: 300,
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "gold",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "tomato",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                            <View 
                                style={{
                                    backgroundColor: "grey",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                            <View 
                                style={{
                                    backgroundColor: "greenyellow",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                        </View>
                    );
                }

            // use diff property if want items in center of secondary axis (in these examples, vertical axis)
            // alignContent (align content as whole)
                // only works with wrapping
                // otherwise it has no effect
                alignContent: "center"
            // alignItems determines alignment of items within EACH line
            // alignContent determines alignmnent of entire content


// FLEXBASIS, FLEXGROW AND FLEXSHRINK

    // flexBasis
        // can set size of item on primary axis
        // equivalent to setting width if primary axis horizontal
        // equivalent to setting height if primary axis vertical
        // therefore, can map to width or height

    // flexGrow
        // flexGrow: 1
            // item will fill the available space
        // exactly like setting flex property 

    // flexStraight
        // not used that often
        // opposite of flexGrow

        // if have overflow (not all items fit on screen)

        // if set to 1, means that (if there is overflow), this item can get shrunk so other items can fit on the screen

        // same as setting flex to negative number

        
// ABSOLUTE AND RELATIVE POSITIONING
    // set top
        // top: number
        // moves number independent pixels from the top
        // can make negative too 

    // set bottom
        // bottom: number
        // equivalent to top: -number
        // move number independent pixels from bottom

    // set left
        // left: number
        // move number independent pixels from left

    // set right
        // right: number
        // move number independent pixels from right

    // use these so can position component relative to its current position without affecting layout arround it
    // other items stay where they are
    // this happens because by default, position: "relative"
        // how works in CSS too

    // position: "absolute"
        // opposite of relative
        // other itmes may move around too (repositioned) not just item

        // item is positioned _ pixels from left/right/top/bottom from parent 
        // move relative to PARENT
        
        // example
            // gold view is positioned 20 pixels from top and 20 pixels from left of its parent (the container that takes up the entire screen)
            // as a result, other views move around so not in original position

                import React from "react";
                import { View } from "react-native";
                export default function App() {
                    return (
                        // items appear at center of horizontal axis
                        <View style={{
                            backgroundColor: "#fff",
                            flexDirection: "row", // horizontal (=main)
                            justifyContent: "center", //main
                            alignItems: "center",
                            
                            flex: 1,
                        }}
                        >  
                        
                            <View 
                                style={{
                                    backgroundColor: "dodgerblue",
                                //equivalent to setting width to be 100
                                    flexBasis: 100,
                                //   width: 100,
                                height: 100,
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "gold",
                                    width: 100,
                                    height: 100,
                                    top: 20,
                                    left: 20,
                                    position: "absolute",
                                }}
                            />
                            <View 
                                style={{
                                    backgroundColor: "tomato",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                            {/* <View 
                                style={{
                                    backgroundColor: "grey",
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        
                            <View 
                                style={{
                                    backgroundColor: "greenyellow",
                                    width: 100,
                                    height: 100,
                                }}
                            /> */}
                        
                        </View>
                    );
                }

                 

// WELCOME SCREEN
    // look at WelcomeScreen.js
// ViewImageScreen
    // look at ViewImageScreen.js


// REFACTORING
    // current problem in implementation: these color codes (repeated multiple times)
    // extract color codes into separate file like colors.js
    // with this, have all colors our app uses in single file

    // look at improved ViewImageScreen.js
        

