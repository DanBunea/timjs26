(ns figwheel.connect (:require [timjs26.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/timjs26.core.on-js-reload (apply js/timjs26.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'timjs26.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

