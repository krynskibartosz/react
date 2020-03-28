import React, { useState } from 'react';

const LikeButton = prop => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => setIsLiked(!isLiked);

    return(
        <button className="btn btn-link" onClick={handleClick}>
        {/* &nbsp; === espace insécable */}
            {isLiked ? prop.likes + 1 : prop.likes} &nbsp;

            <i className={isLiked ? "fas fa-thumbs-up": "far fa-thumbs-up"}></i>

            {isLiked ? " Je n'aime plus!" : " J'aime!"}
        </button>
    )
}

// class LikeButton extends React.Component {
//     state = {
//             likes: this.props.likes || 0,
//             isLiked: this.props.isLiked || false
//         };

//     handleClick = () => {
//         const isLiked = this.state.isLiked;
//         const likes = this.state.likes + (isLiked ? -1 : 1);

//         this.setState({ likes, isLiked : !isLiked });
//     }

//     render(){
        // return <button className="btn btn-link" onClick={this.handleClick}>
        // {/* &nbsp === espace insécable */}
        //     {this.state.likes} &nbsp;
        //     <i className={this.state.isLiked ? "fas fa-thumbs-up": "far fa-thumbs-up"}></i>
        //     {this.state.isLiked ? " Je n'aime plus!" : " J'aime!"}
//         </button>
//     }
//     // render(){
//     //     return React.createElement('button', { className: "btn btn-link", onClick: () => this.handleClick()}, this.state.likes,
//     //     React.createElement('i', { className: this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}),
//     //     this.state.isLiked? " Je n'aime plus !": " J'aime !");
//     // }
// }


export default LikeButton
