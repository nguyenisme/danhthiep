
        (function() {
            var isDevToolsOpen = false;
            var lastWindowWidth = window.innerWidth;
            
            function checkDevTools() {
                if (window.innerWidth !== lastWindowWidth) {
                    isDevToolsOpen = true;
                    lastWindowWidth = window.innerWidth;
                }
                if (isDevToolsOpen) {
                    location.reload();  // Reload trang khi phát hiện Developer Tools
                }
            }

            window.addEventListener('resize', checkDevTools);
        })();