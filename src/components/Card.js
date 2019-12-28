import React from 'react'; // do so so our program understands JSX

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> {/* randomize robot pictures we get using id */}
            <div>
                <h2>{name}</h2> {/* must rap js expressions in {} */}
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;