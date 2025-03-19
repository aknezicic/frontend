import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCode = ({ formData, cart }) => {
    if (!cart || cart.length === 0) return <p>No items in the cart.</p>;

    // Izračunaj ukupnu cijenu narudžbe
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    // Generiraj podatke za QR kod na temelju narudžbe
    const paymentInfo = `HRVHUB30\nEUR\n${totalPrice}\n` +
        `${formData.name}\n${formData.address}\n${formData.city}\n` +
        "pkoretic J.D.O.O\nPREVOJ DD\n10000 ZAGREB\n" +
        "HR5041240000000000\nHR01\n7336-68949637625-00001\nCOST\nPlaćanje narudžbe\n";

    return (
        <div className="text-center p-5">
            <h3>Scan to Pay</h3>
            <QRCodeSVG value={paymentInfo} size={256} />
        </div>
    );
};

export default QRCode;
