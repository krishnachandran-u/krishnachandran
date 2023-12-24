import React, { useEffect } from 'react';
import * as $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import the Owl Carousel CSS

const StacksOwlCarousel = () => {
    return (
        <div>
            <div className="owl-carousel owl-theme">
                <div className="item"><h4>1</h4></div>
                <div className="item"><h4>2</h4></div>
                <div className="item"><h4>3</h4></div>
                <div className="item"><h4>4</h4></div>
                <div className="item"><h4>5</h4></div>
                <div className="item"><h4>6</h4></div>
                <div className="item"><h4>7</h4></div>
                <div className="item"><h4>8</h4></div>
                <div className="item"><h4>9</h4></div>
                <div className="item"><h4>10</h4></div>
                <div className="item"><h4>11</h4></div>
                <div className="item"><h4>12</h4></div>
            </div>
        </div>
    );
}

export default StacksOwlCarousel;