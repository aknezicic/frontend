import React, { useEffect, useState } from "react";

const MediaImg = ({ id, size }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!id) return; // Ako nema ID-a slike, prekini učitavanje

        fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched media data:", data); // 🛠 Provjera API odgovora

                // Prvo provjeri postoji li tražena veličina slike
                if (data.media_details?.sizes?.[size]?.source_url) {
                    setImage(data.media_details.sizes[size].source_url);
                } 
                // Ako tražena veličina ne postoji, koristi glavni `source_url`
                else if (data.source_url) {
                    setImage(data.source_url);
                } 
                // Ako ništa nije dostupno, postavi default sliku
                else {
                    setImage("/images/default-image.jpg");
                }
            })
            .catch(error => {
                console.error("Greška pri učitavanju slike:", error);
                setImage("/images/default-image.jpg"); // Prikaži default sliku ako dođe do greške
            });
    }, [id, size]);

    if (!image) {
        return <p>Loading</p>;
    }

    return <img src={image} alt="Related to blog post" />;
};

export default MediaImg;
