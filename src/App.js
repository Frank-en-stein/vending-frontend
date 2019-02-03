import React, { Component } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import requests from './network/requests';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: true,
            id: null,
            images: [],
            dataUrl: [],
            interval: 3000,
            isLoaded: [],
            autoPlay: true
        }
    }
    componentWillMount() {
        while (localStorage.getItem("id") === null) {
            var id = prompt("Vending machine id isn't set. Please enter machine number:");
            if (Number.isInteger(parseInt(id))) localStorage.setItem("id", id);
        }
        this.setState({
            id: localStorage.getItem("id"),
            loading: true
        });
        requests.getInfo(localStorage.getItem("id"), (isSuccess, data) => {
            if (isSuccess) {
                this.setState({images: data.images, interval: data.interval, dataUrl: data.images.map(()=>null),
                    isLoaded: data.images.map(()=>false)});
            }
        });
        setInterval(() => {
            requests.getInfo(localStorage.getItem("id"), (isSuccess, data) => {
                if (isSuccess) {
                    if (data.images.length !== this.state.images.length) window.location.reload();
                    for(var i=0; i<data.images.length; i++) {
                        if (data.images[i] !== this.state.images[i]) window.location.reload();
                    }
                    if (data.interval !== this.state. interval) this.setState({interval: data.interval});
                }
            });
        }, 15000);
    }
    loaded(index) {
        if (this.state.isLoaded[index]) return;
        var arr = this.state.isLoaded;
        arr[index] = true;
        console.log(arr, arr.reduce((sum, num) => sum+num, 0));
        this.setState({isLoaded: arr}, () => {
            if (this.state.isLoaded.reduce((sum, num) => sum+num, 0) === arr.length) {console.log(this.state); this.setState({loading: false});}
        })
    }
    handleChange(idx, el) {
        if (this.state.dataUrl[idx] === null) return;
        var elem = this.refs["video" + idx];
        elem.play();
    }
    render() {
        return (
            <div className={this.state.loading ? "App center" : "App"}>
                {
                    this.state.loading ?
                    <div>
                        <div className="loader"></div>
                        {
                            this.state.images.map((imageUrl, index) => {
                                if (!imageUrl.match(/.(jpg|jpeg|png|gif)$/i)) {
                                    if (this.state.isLoaded[index]) return null;
                                    requests.getVideoData(imageUrl, (dataUrl) => {
                                        var arr = this.state.dataUrl;
                                        arr[index] = dataUrl;
                                        this.setState({dataUrl: arr}, this.loaded(index));
                                    });
                                    return null;
                                }
                                return (
                                    <img src={imageUrl} height="100" key={index} onLoad={()=>this.loaded(index)}/>
                                );
                            })
                        }
                    </div>

                    :

                    <Carousel showThumbs={false} showArrows={false} infiniteLoop autoPlay={this.state.autoPlay} interval={parseInt(this.state.interval)}
                        dynamicHeight={true} stopOnHover={false} onChange={(index, el) => this.handleChange(index, el)}>
                        {
                            this.state.images.map((imageUrl, index) => {
                                if (!imageUrl.match(/.(jpg|jpeg|png|gif)$/i)) {
                                    return (
                                        <video key={index} id={"video" + index} ref={"video" + index} height={window.innerHeight} onEnded={()=>setTimeout(()=>this.setState({autoPlay: true}), 500)}>
                                            <source src={imageUrl} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    );
                                }
                                return (
                                    <div key={index}>
                                        <img src={imageUrl} className="full-screen-height"/>
                                    </div>
                                );
                            })
                        }
                    </Carousel>
                }
            </div>
        );
    }
}

export default App;
