import React from 'react';

const contactomaps = () => {
    const mapStyle = {
        border: '0',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem', // Agregar margen superior de 2 rem
    };

    return (
        <div style={containerStyle}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.349075574572!2d-68.841319!3d-32.88925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091bd18979f3%3A0xe5e9464195ef7fff!2sOPTICA%20URICOLOR!5e0!3m2!1ses-419!2sar!4v1698232963339!5m2!1ses-419!2sar"
                width="954" height="362" style={mapStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"
            ></iframe>
        </div>
    );
};

export default contactomaps;
