document.addEventListener('DOMContentLoaded', function() {
    console.log('Video selection script loaded');
    
    // Video selection functionality for ENV_dyCheck section
    const videoContainerEnvDycheck = document.getElementById('video-container-env-dycheck');
    // Find the selection panel that comes right after this video container
    const selectionPanelEnvDycheck = videoContainerEnvDycheck ? 
        videoContainerEnvDycheck.nextElementSibling : null;
    const selectableImagesEnvDycheck = selectionPanelEnvDycheck && selectionPanelEnvDycheck.classList.contains('selection-panel') ? 
        selectionPanelEnvDycheck.querySelectorAll('.selectable-image') : [];
    
    console.log('Video container env-dycheck:', videoContainerEnvDycheck);
    console.log('Selection panel env-dycheck:', selectionPanelEnvDycheck);
    console.log('Selectable images env-dycheck:', selectableImagesEnvDycheck.length);
    console.log('Selectable images env-dycheck:', selectableImagesEnvDycheck);
    
    // Map of image names to video sources for ENV_dyCheck
    // const videoMapEnvDycheck = {
    //     'backpack-ENV0': './assets/video/combined_video2/ENV_dyCheck/backpack-ENV0.mp4',
    //     'backpack-ENV1': './assets/video/combined_video2/ENV_dyCheck/backpack-ENV1.mp4',
    //     'haru-sit-ENV0': './assets/video/combined_video2/ENV_dyCheck/haru-sit-ENV0.mp4',
    //     'haru-sit-ENV1': './assets/video/combined_video2/ENV_dyCheck/haru-sit-ENV1.mp4'
    // };
    const videoMapEnvDycheck = {
        'backpack-ENV0': './assets/video/subvideo/6.mp4',
        'backpack-ENV1': './assets/video/subvideo/7.mp4',
        'haru-sit-ENV0': './assets/video/subvideo/8.mp4',
        'haru-sit-ENV1': './assets/video/combined_video2/ENV_dyCheck/haru-sit-ENV1.mp4'
    };
    
    // Function to update video source for ENV_dyCheck
    function updateVideoEnvDycheck(videoName) {
        const video = videoContainerEnvDycheck ? videoContainerEnvDycheck.querySelector('video') : null;
        console.log('Updating video env-dycheck:', videoName, 'Video element:', video);
        if (video && videoMapEnvDycheck[videoName]) {
            video.src = videoMapEnvDycheck[videoName];
            video.load();
            video.play().catch(e => console.log('Video play error:', e));
        } else {
            console.log('Video not found or video name not in map:', videoName);
        }
    }
    
    // Add click event listeners to selectable images for ENV_dyCheck
    selectableImagesEnvDycheck.forEach(img => {
        console.log('Adding click listener to image:', img.getAttribute('name'));
        img.addEventListener('click', function() {
            console.log('Image clicked env-dycheck:', this.getAttribute('name'));
            // Remove selected class from all images in this section
            selectableImagesEnvDycheck.forEach(img => img.classList.remove('selected'));
            
            // Add selected class to clicked image
            this.classList.add('selected');
            
            // Update video source
            const videoName = this.getAttribute('name');
            updateVideoEnvDycheck(videoName);
        });
    });
    
    // Initialize with first video for ENV_dyCheck
    if (selectableImagesEnvDycheck.length > 0) {
        const firstImage = selectableImagesEnvDycheck[0];
        const firstVideoName = firstImage.getAttribute('name');
        console.log('Initializing with video env-dycheck:', firstVideoName);
        updateVideoEnvDycheck(firstVideoName);
    }

    // Video selection functionality for Davis sections (supports multiple containers)
    const videoMapDavis = {
        'breakdance-flare-ENV1': './assets/video/subvideo/10.mp4',
        'breakdance-flare-ENV2': './assets/video/subvideo/11.mp4',
        'camel-ENV2': './assets/video/subvideo/12.mp4',
        'car-roundabout-ENV1': './assets/video/subvideo/13.mp4',
        'car-roundabout-ENV2': './assets/video/subvideo/14.mp4',
        'car-turn-ENV1': './assets/video/subvideo/15.mp4',
        'car-turn-ENV2': './assets/video/subvideo/16.mp4',
        'drift-straight-ENV1': './assets/video/subvideo/17.mp4',
        'drift-straight-ENV2': './assets/video/subvideo/18.mp4',
        'rhino-ENV1': './assets/video/subvideo/19.mp4',
        'helicopter-ENV1': './assets/video/subvideo/20.mp4',
        'helicopter-ENV2': './assets/video/subvideo/21.mp4',
        'libby-ENV1': './assets/video/subvideo/22.mp4',
        'libby-ENV2': './assets/video/subvideo/23.mp4',
        'breakdance-flare-ENV1-mosca': './assets/video/subvideo/30.mp4',
        'car-roundabout-ENV1-mosca': './assets/video/subvideo/26.mp4',
        'train-ENV1-mosca': './assets/video/subvideo/28.mp4',
        'helicopter-ENV1-mosca': './assets/video/subvideo/24.mp4'
    };

    // Support duplicate IDs by selecting via attribute and wiring each section
    document.querySelectorAll('[id="video-container-davis"]').forEach(videoContainer => {
        const selectionPanel = videoContainer ? videoContainer.nextElementSibling : null;
        const selectableImages = selectionPanel && selectionPanel.classList.contains('selection-panel') ? 
            selectionPanel.querySelectorAll('.selectable-image') : [];

        function updateVideo(videoName) {
            const video = videoContainer.querySelector('video');
            if (video && videoMapDavis[videoName]) {
                video.src = videoMapDavis[videoName];
                video.load();
                video.play().catch(() => {});
            }
        }

        selectableImages.forEach(img => {
            img.addEventListener('click', function() {
                selectableImages.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                updateVideo(this.getAttribute('name'));
            });
        });

        if (selectableImages.length > 0) {
            updateVideo(selectableImages[0].getAttribute('name'));
        }
    });

    // Video selection functionality for Objaverse section (supports multiple containers)
    const videoMapObjaverse = {
        'rat-mosca': './assets/video/subvideo/32.mp4',
        'doctor-mosca': './assets/video/subvideo/33.mp4',
        'angryBird-mosca': './assets/video/subvideo/34.mp4',
        'woman-front': './assets/video/subvideo/35.mp4',
        'doctor-front': './assets/video/subvideo/36.mp4',
        'angryBird-front': './assets/video/subvideo/37.mp4'
    };

    // Support duplicate IDs by selecting via attribute and wiring each section
    document.querySelectorAll('[id="video-container-objaverse"]').forEach(videoContainer => {
        // Collect all subsequent sibling selection panels (there are two groups)
        const selectionPanels = [];
        let sibling = videoContainer.nextElementSibling;
        while (sibling) {
            if (sibling.id && sibling.id.startsWith('video-container-')) break; // stop at next container
            if (sibling.classList && sibling.classList.contains('selection-panel')) selectionPanels.push(sibling);
            sibling = sibling.nextElementSibling;
        }

        function updateVideo(videoName) {
            const video = videoContainer.querySelector('video');
            if (video && videoMapObjaverse[videoName]) {
                video.src = videoMapObjaverse[videoName];
                video.load();
                video.play().catch(() => {});
            }
        }

        // Bind clicks for each selection panel group
        selectionPanels.forEach(panel => {
            const imgs = panel.querySelectorAll('.selectable-image');
            imgs.forEach(img => {
                img.addEventListener('click', function() {
                    // Clear selection within this panel only
                    imgs.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    updateVideo(this.getAttribute('name'));
                });
            });
        });

        // Initialize from the first available image
        const firstPanel = selectionPanels[0];
        if (firstPanel) {
            const firstImg = firstPanel.querySelector('.selectable-image');
            if (firstImg) updateVideo(firstImg.getAttribute('name'));
        }
    });

    // Video selection functionality for tracking dyCheck section
    const videoContainerTrackingDycheck = document.getElementById('video-container-tracking-dycheck');
    // Find the selection panel that comes right after this video container
    const selectionPanelTrackingDycheck = videoContainerTrackingDycheck ? 
        videoContainerTrackingDycheck.nextElementSibling : null;
    const selectableImagesTrackingDycheck = selectionPanelTrackingDycheck && selectionPanelTrackingDycheck.classList.contains('selection-panel') ? 
        selectionPanelTrackingDycheck.querySelectorAll('.selectable-image') : [];
    
    console.log('Video container tracking-dycheck:', videoContainerTrackingDycheck);
    console.log('Selectable images tracking-dycheck:', selectableImagesTrackingDycheck.length);
    
    // Map of image names to video sources for tracking dyCheck
    // const videoMapTrackingDycheck = {
    //         'backpack-ENV1': './assets/video/combined_video2/tracking_dyCheck/backpack-ENV1.mp4',
    // 'harusit-ENV0': './assets/video/combined_video2/tracking_dyCheck/harusit-ENV0.mp4'
    // };
    const videoMapTrackingDycheck = {
            'backpack-ENV1': './assets/video/subvideo/42.mp4',
    'harusit-ENV0': './assets/video/subvideo/43.mp4',
    'camel-ENV9': './assets/video/subvideo/44.mp4',
    'helicopter-ENV9': './assets/video/subvideo/45.mp4'
    };
    
    // Function to update video source for tracking dyCheck
    function updateVideoTrackingDycheck(videoName) {
        const video = videoContainerTrackingDycheck ? videoContainerTrackingDycheck.querySelector('video') : null;
        console.log('Updating video tracking-dycheck:', videoName, 'Video element:', video);
        if (video && videoMapTrackingDycheck[videoName]) {
            video.src = videoMapTrackingDycheck[videoName];
            video.load();
            video.play().catch(e => console.log('Video play error:', e));
        } else {
            console.log('Video not found or video name not in map:', videoName);
        }
    }
    
    // Add click event listeners to selectable images for tracking dyCheck
    selectableImagesTrackingDycheck.forEach(img => {
        img.addEventListener('click', function() {
            console.log('Image clicked tracking-dycheck:', this.getAttribute('name'));
            // Remove selected class from all images in this section
            selectableImagesTrackingDycheck.forEach(img => img.classList.remove('selected'));
            
            // Add selected class to clicked image
            this.classList.add('selected');
            
            // Update video source
            const videoName = this.getAttribute('name');
            updateVideoTrackingDycheck(videoName);
        });
    });
    
    // Initialize with first video for tracking dyCheck
    if (selectableImagesTrackingDycheck.length > 0) {
        const firstImage = selectableImagesTrackingDycheck[0];
        const firstVideoName = firstImage.getAttribute('name');
        console.log('Initializing with video tracking-dycheck:', firstVideoName);
        updateVideoTrackingDycheck(firstVideoName);
    }

    // Video selection functionality for tracking Davis section
    const videoContainerTrackingDavis = document.getElementById('video-container-tracking-davis');
    // Find the selection panel that comes right after this video container
    const selectionPanelTrackingDavis = videoContainerTrackingDavis ? 
        videoContainerTrackingDavis.nextElementSibling : null;
    const selectableImagesTrackingDavis = selectionPanelTrackingDavis && selectionPanelTrackingDavis.classList.contains('selection-panel') ? 
        selectionPanelTrackingDavis.querySelectorAll('.selectable-image') : [];
    
    console.log('Video container tracking-davis:', videoContainerTrackingDavis);
    console.log('Selectable images tracking-davis:', selectableImagesTrackingDavis.length);
    
    // Map of image names to video sources for tracking Davis
    const videoMapTrackingDavis = {
            'camel-ENV9': './assets/video/subvideo/44.mp4',
    'helicopter-ENV9': './assets/video/subvideo/45.mp4'
    };
    
    // Function to update video source for tracking Davis
    function updateVideoTrackingDavis(videoName) {
        const video = videoContainerTrackingDavis ? videoContainerTrackingDavis.querySelector('video') : null;
        console.log('Updating video tracking-davis:', videoName, 'Video element:', video);
        if (video && videoMapTrackingDavis[videoName]) {
            video.src = videoMapTrackingDavis[videoName];
            video.load();
            video.play().catch(e => console.log('Video play error:', e));
        } else {
            console.log('Video not found or video name not in map:', videoName);
        }
    }
    
    // Add click event listeners to selectable images for tracking Davis
    selectableImagesTrackingDavis.forEach(img => {
        img.addEventListener('click', function() {
            console.log('Image clicked tracking-davis:', this.getAttribute('name'));
            // Remove selected class from all images in this section
            selectableImagesTrackingDavis.forEach(img => img.classList.remove('selected'));
            
            // Add selected class to clicked image
            this.classList.add('selected');
            
            // Update video source
            const videoName = this.getAttribute('name');
            updateVideoTrackingDavis(videoName);
        });
    });
    
    // Initialize with first video for tracking Davis
    if (selectableImagesTrackingDavis.length > 0) {
        const firstImage = selectableImagesTrackingDavis[0];
        const firstVideoName = firstImage.getAttribute('name');
        console.log('Initializing with video tracking-davis:', firstVideoName);
        updateVideoTrackingDavis(firstVideoName);
    }

    // Video selection functionality for validation section
    const videoContainerValidation = document.getElementById('video-container-validation');
    // Find the selection panel that comes right after this video container
    const selectionPanelValidation = videoContainerValidation ? 
        videoContainerValidation.nextElementSibling : null;
    const selectableImagesValidation = selectionPanelValidation && selectionPanelValidation.classList.contains('selection-panel') ? 
        selectionPanelValidation.querySelectorAll('.selectable-image') : [];
    
    console.log('Video container validation:', videoContainerValidation);
    console.log('Selectable images validation:', selectableImagesValidation.length);
    
    // Map of image names to video sources for validation
    const videoMapValidation = {
            'apple-val0': './assets/video/combined_video2/val_dyCheck/apple-val0.mp4',
    'apple-val1': './assets/video/combined_video2/val_dyCheck/apple-val1.mp4',
    'paper-windmill-val0': './assets/video/combined_video2/val_dyCheck/paper-windmill-val0.mp4',
    'paper-windmill-val1': './assets/video/combined_video2/val_dyCheck/paper-windmill-val1.mp4',
    'spin-val0': './assets/video/combined_video2/val_dyCheck/spin-val0.mp4',
    'spin-val1': './assets/video/combined_video2/val_dyCheck/spin-val1.mp4',
    'space-out-val0': './assets/video/combined_video2/val_dyCheck/space-out-val0.mp4'
    };
    
    // Function to update video source for validation
    function updateVideoValidation(videoName) {
        const video = videoContainerValidation ? videoContainerValidation.querySelector('video') : null;
        console.log('Updating video validation:', videoName, 'Video element:', video);
        if (video && videoMapValidation[videoName]) {
            video.src = videoMapValidation[videoName];
            video.load();
            video.play().catch(e => console.log('Video play error:', e));
        } else {
            console.log('Video not found or video name not in map:', videoName);
        }
    }
    
    // Add click event listeners to selectable images for validation
    selectableImagesValidation.forEach(img => {
        img.addEventListener('click', function() {
            console.log('Image clicked validation:', this.getAttribute('name'));
            // Remove selected class from all images in this section
            selectableImagesValidation.forEach(img => img.classList.remove('selected'));
            
            // Add selected class to clicked image
            this.classList.add('selected');
            
            // Update video source
            const videoName = this.getAttribute('name');
            updateVideoValidation(videoName);
        });
    });
    
    // Initialize with first video for validation
    if (selectableImagesValidation.length > 0) {
        const firstImage = selectableImagesValidation[0];
        const firstVideoName = firstImage.getAttribute('name');
        console.log('Initializing with video validation:', firstVideoName);
        updateVideoValidation(firstVideoName);
    }
}); 