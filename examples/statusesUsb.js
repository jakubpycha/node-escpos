const escpos = require('../packages/printer');
escpos.USB = require('../packages/usb');

const device  = new escpos.USB();
const printer = new escpos.Printer(device);

device.open(function (error) {
    if (error) {
        console.error(error);
        return;
    }
    printer
        .getStatuses(statuses => {
            statuses.forEach(status => {
                console.log(status.toJSON());
            })
        })
        .close();
});
