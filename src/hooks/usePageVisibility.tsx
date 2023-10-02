// import { useEffect } from 'react';

// const usePageVisibility = () => {
//     useEffect(() => {
//         const handleVisibilityChange = () => {
//             const isVisible = document.visibilityState === 'visible';
//             if (!isVisible) {
//                 document.title = "I find your lack of faith disturbing. Come back!";
//             } else {
//                 document.title = "StarWars Starships";
//             }
//         };

//         document.addEventListener("visibilitychange", handleVisibilityChange);

//         return () => {
//             document.removeEventListener("visibilitychange", handleVisibilityChange);
//         };
//     }, []);
// };

// export default usePageVisibility;

import { useEffect } from 'react';

const usePageVisibility = () => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            const isVisible = document.visibilityState === 'visible';
            if (!isVisible) {
                document.title = "I find your lack of faith disturbing. Come back!";
                changeFavicon('git ad/darth-vader-force-grip.png');
            } else {
                document.title = "StarWars Starships";
                changeFavicon('/mf-favicon.png');
            }
        };

        const changeFavicon = (newFaviconUrl: string) => {
            const oldFavicon = document.querySelector("link[rel='icon']");
            const newFavicon = document.createElement('link');
            newFavicon.rel = 'icon';
            newFavicon.href = newFaviconUrl;

            if (oldFavicon) {
                document.head.removeChild(oldFavicon);
            }

            document.head.appendChild(newFavicon);
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
};

export default usePageVisibility;
