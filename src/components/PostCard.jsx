import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import moment from 'moment';
import 'moment/locale/id';

const formatDate = (dateString) => {
    return moment(dateString).format('D MMMM YYYY');
  };

const PostCard = ({ idea }) => {
  const [imageError, setImageError] = useState(false);
  const imageUrl = idea.medium_image[0]?.url || idea.small_image[0]?.url;
  const placeholderImageUrl = 'https://via.placeholder.com/300x200?text=No+Image'; // Placeholder image URL

  const handleImageError = () => {
    console.error('Error loading image:', imageUrl);
    setImageError(true);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-auto flex flex-col">
      {!imageError ? (
        <LazyLoadImage
          alt={idea.title}
          src={imageUrl}
          onError={handleImageError}
          effect="blur"
          className="w-full h-40 object-cover"
        />
      ) : (
        <img
          src={placeholderImageUrl}
          alt="Placeholder"
          className="w-full h-40 object-cover"
        /> 
      )}
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 "> {formatDate(idea.published_at)}</p>
        <h3 className="text-xl font-semibold overflow-hidden text-ellipsis line-clamp-3">
          {idea.title}
        </h3>
      </div>
    </div>
  );
};

export default PostCard;