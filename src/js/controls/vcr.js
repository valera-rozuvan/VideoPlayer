s2js.VCR = s2js.Component.extend({
    className: 's2js-vcr',
    title: 'vcr',
    _constructor: function (player, media) {
        this.player = player;
        this.media = media;
        this.element = this.build.apply(this, arguments);

        media.element.addEventListener('timeupdate', this.onUpdateHandler.bind(this), false);
        media.element.addEventListener('durationchange', this.onUpdateHandler.bind(this), false);
    },
    build: function (player, media) {
        var container = player.element,
            vcr = $('<span>00:00 / 00:00</span>');

        vcr
            .addClass(this.className)
            .appendTo(container);

        return vcr;
    },
    onUpdateHandler: function (event) {
        var value = [
            s2js.Utils.secondsToTimecode(this.media.currentTime),
            s2js.Utils.secondsToTimecode(this.media.duration)
        ].join(' / ');

        this.element.html(value);
        event.preventDefault();
    }
});
