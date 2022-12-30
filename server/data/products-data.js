const products = [
    {
        name: "Hisense 58 Class 4K",
        image: "https://i5.walmartimages.com/asr/9bbfd5a6-07ad-4660-90ef-2b9217443dba.ac35f5dbcdff7e5f0e3342185ac6d709.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The Hisense Roku TV R6 Series packs incredible details into a 4K Ultra High Definition picture. The R6 series also features High Dynamic Range (HDR) that boosts color and contrast, and Motion Rate 120 technology which makes it easier to follow fast action scenes. Plus, with Roku TV operating system (OS), it's easier to watch what you love with access to thousands of streaming channels, apps, and live TV. Giving everyone in your household something to enjoy.",
        brand: "Hisense",
        category: "TV",
        price: 298.00,
        countInStock: 3,
        rating: 4.5,
        numReviews: 4

    },
    {
        name: "DJI RS 3 Pro",
        image: "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/20f83b07409f971cda63f3626de31f29@ultra.jpg",
        description: "Expanding on the powerful features of the Ronin series, DJI RS 3 Pro is an advanced, comprehensive camera expansion platform that empowers videographers and provides coordinated shooting solutions for professional crews. With DJI RS 3 Pro, nothing is out of reach.",
        brand: "Lenovo",
        category: "Computers",
        price: 129.00,
        countInStock: 6,
        rating: 4.0,
        numReviews: 4
    },
    {
        name: "iBUYPOWER Gaming PC",
        image: "https://i5.walmartimages.com/asr/3b288511-d6ed-4bec-92e9-f212f428a249.f9a9483cbf848f3cb6039f2848e52e2f.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "Experience outstanding detail and performance from the iBUYPWER TraceMR258i gaming desktop PC. Whether you are looking for gaming, entertainment, content creation, scientific research, education, or use for cloud/datacenter - this desktop rig will take you there!",
        brand: "iBUYPOWER",
        category: "Gaming",
        price: 929.99,
        countInStock: 5,
        rating: 3.5,
        numReviews: 4
    },
    {
        name: "Lenovo Ideapad 1i",
        image: "https://i5.walmartimages.com/asr/9ef0e7e7-607f-40f0-a47a-37a754da92dc.7f5be0d865f6efc0542a357ad57de7f2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The IdeaPad 1i raises the bar on every affordable laptop with a super efficient Intel Pentium processor in a thin and compact 17.9 mm chassis that makes multitasking a breeze while boosting energy efficiency with 10 hours of battery life and rapid charge. Get more value with four sided narrow bezels for maximum screen, Dolby Audio speakers and Flip to Start for instant bootup. Includes Microsoft 365.",
        brand: "Dji",
        category: "Drones",
        price:1599,
        countInStock: 5,
        rating: 3.5,
        numReviews: 4
    },   
     {
        name: "DJI Mini 3 Pro (DJI RC-N1)",
        image: "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/95c923686020b536a85470ecc48740ed@ultra.jpg",
        description: "The mini-sized, mega-capable DJI Mini 3 Pro is just as powerful as it is portable. Weighing less than 249 g and with upgraded safety features, it's not only regulation-friendly, it's also the safest in its series. [1] With a 1/1.3-inch sensor and top-tier features, it redefines what it means to fly Mini",
        brand: "Dji",
        category: "Drones",
        price: 759,
        countInStock: 14,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "Tenkeyless Mechanical Gaming Keyboard",
        image: "https://i5.walmartimages.com/asr/e5e80659-bf0a-4d64-aac3-897234b24aed.09c9cdad0f6c00931f8e95894cebb789.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The HyperX Alloy Origins CoreTM is an ultra-compact, sturdy tenkeyless keyboard featuring custom HyperX mechanical switches designed to give gamers the best blend of style, performance, and reliability. These key switches have exposed LEDs for stunning lighting with an actuation force and travel distance elegantly balanced for responsiveness and accuracy. Alloy Origins Core is built with a full aluminum body so it stays rigid and stable when keystrokes are flying, and also features keyboard feet that let you choose from three different tilt levels. Its compact TKL design frees up space for mouse movement in desktop setups where space is at a premium, and it also features a detachable USB Type-C cable for supreme portability. Customize your lighting, craft macros, and adjust Game Mode with HyperX Ngenuity Software. This powerful, yet easy-to-use program lets you set per-key lighting, layer dazzling lighting effects, and add scores of other personalized touches to your Ngenuity compatible products.",
        brand: "HyperX",
        category: "Keyboard",
        price: 69.00,
        countInStock: 9,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "MSI Katana GF76 KatanaGF76035",
        image: "https://i5.walmartimages.com/asr/6fd49338-1318-4cb6-b228-313775b52d4d.31bbb30581a233a1dc2a52c4a7e9ec18.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The Katana GF series is as powerful and thin as a honed blade. Sharpen your game with a 12th Gen Intel Core™ processor, NVIDIA GeForce RTX™ 30 series graphics, and an exclusive red illuminating keyboard. Crafted to unleash true performance during gameplay for hours on end. Make an impact on the battle field with the Katana GF76. MSI Katana GF76 Katana GF76035, 17.3, Gaming Notebook, Full HD 1920 x 1080, Intel Core i7 12th Gen i7-12700H, Octa-core (8 Core), 1.70 GHz, 16 GB Total RAM, 1 TB SSD, Black.",
        brand: "MSI",
        category: "Gaming",
        price: 1149.00,
        countInStock: 0,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "Sony INZONE H9",
        image: "https://i5.walmartimages.com/asr/3faeac9e-709e-4159-bcce-5f373c44844b.ae2eb337b9e8741a385eace21cb6c282.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "Sharpen your senses and prepare for your match. Our INZONE H9 wireless noise canceling over-ear gaming headset immerses you in the zone with 360 Spatial Sound for Gaming and noise cancelling for supercharged hearing and super sharp reflexes. Take performance beyond your best, detecting enemies before they see you. With 360 Spatial Sound for Gaming and our proven hardware technology, you can detect where your opponents are and how far away. Even players hiding in shadows, or behind walls and obstacles, can’t stay hidden for long. Our 360 Spatial Sound for Gaming, activated by the PC software INZONE Hub features a newly developed virtualizer for gaming that reproduces spatial sound out of multi-channel audio signals as the game creators intended. Also, with the smartphone app 360 Spatial Sound Personalizer, you’ll get spatial sound optimized to your ear shape for truly personalized gameplay.",
        brand: "Sony",
        category: "Headphones",
        price: 278.00,
        countInStock: 14,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "Hisense 58 Class 4K",
        image: "https://i5.walmartimages.com/asr/61066cfa-2c66-44e3-87d5-00dd80fc2e7e.8e5fc87464339dcbfeb2848711d6d1c9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The Hisense Roku TV R6 Series packs incredible details into a 4K Ultra High Definition picture. The R6 series also features High Dynamic Range (HDR) that boosts color and contrast, and Motion Rate 120 technology which makes it easier to follow fast action scenes. Plus, with Roku TV operating system (OS), it's easier to watch what you love with access to thousands of streaming channels, apps, and live TV. Giving everyone in your household something to enjoy.",
        brand: "Hisense",
        category: "TV",
        price: 298.00,
        countInStock: 3,
        rating: 4.5,
        numReviews: 4

    },


    {
        name: "DJI RS 3 Pro",
        image: "https://i5.walmartimages.com/asr/49baf81b-e2dd-4012-aad6-f44bfea7f3f7.ba482f0ec5f6e04ef6d4e20a07bc0b93.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "Expanding on the powerful features of the Ronin series, DJI RS 3 Pro is an advanced, comprehensive camera expansion platform that empowers videographers and provides coordinated shooting solutions for professional crews. With DJI RS 3 Pro, nothing is out of reach.",
        brand: "Lenovo",
        category: "Computers",
        price: 129.00,
        countInStock: 6,
        rating: 4.0,
        numReviews: 4
    },
    {
        name: "iBUYPOWER Gaming PC",
        image: "https://i5.walmartimages.com/asr/ba086feb-e0b4-44e8-9a59-ed854cc9f1ec.0b0db59e004cb0c93689c8fa59ee4392.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "Experience outstanding detail and performance from the iBUYPWER TraceMR258i gaming desktop PC. Whether you are looking for gaming, entertainment, content creation, scientific research, education, or use for cloud/datacenter - this desktop rig will take you there!",
        brand: "iBUYPOWER",
        category: "Gaming",
        price: 929.99,
        countInStock: 5,
        rating: 3.5,
        numReviews: 4
    },
    {
        name: "Lenovo Ideapad 1i",
        image: "https://i5.walmartimages.com/asr/20d8b39a-3081-46d4-8e01-ba5439fd6219.b6d86391c3fd00a2e40d9cd5553cd07b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The IdeaPad 1i raises the bar on every affordable laptop with a super efficient Intel Pentium processor in a thin and compact 17.9 mm chassis that makes multitasking a breeze while boosting energy efficiency with 10 hours of battery life and rapid charge. Get more value with four sided narrow bezels for maximum screen, Dolby Audio speakers and Flip to Start for instant bootup. Includes Microsoft 365.",
        brand: "Dji",
        category: "Drones",
        price:1599,
        countInStock: 5,
        rating: 3.5,
        numReviews: 4
    },   
     {
        name: "DJI Mini 3 Pro (DJI RC-N1)",
        image: "https://i5.walmartimages.com/asr/f8d8b7b6-e68d-4189-a8be-c807c9f91fee.eecac5d7723ac8756bb0f1a68b844836.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The mini-sized, mega-capable DJI Mini 3 Pro is just as powerful as it is portable. Weighing less than 249 g and with upgraded safety features, it's not only regulation-friendly, it's also the safest in its series. [1] With a 1/1.3-inch sensor and top-tier features, it redefines what it means to fly Mini",
        brand: "Dji",
        category: "Drones",
        price: 759,
        countInStock: 14,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "Tenkeyless Mechanical Gaming Keyboard",
        image: "https://i5.walmartimages.com/asr/e5e80659-bf0a-4d64-aac3-897234b24aed.09c9cdad0f6c00931f8e95894cebb789.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The HyperX Alloy Origins CoreTM is an ultra-compact, sturdy tenkeyless keyboard featuring custom HyperX mechanical switches designed to give gamers the best blend of style, performance, and reliability. These key switches have exposed LEDs for stunning lighting with an actuation force and travel distance elegantly balanced for responsiveness and accuracy. Alloy Origins Core is built with a full aluminum body so it stays rigid and stable when keystrokes are flying, and also features keyboard feet that let you choose from three different tilt levels. Its compact TKL design frees up space for mouse movement in desktop setups where space is at a premium, and it also features a detachable USB Type-C cable for supreme portability. Customize your lighting, craft macros, and adjust Game Mode with HyperX Ngenuity Software. This powerful, yet easy-to-use program lets you set per-key lighting, layer dazzling lighting effects, and add scores of other personalized touches to your Ngenuity compatible products.",
        brand: "HyperX",
        category: "Keyboard",
        price: 69.00,
        countInStock: 9,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "MSI Katana GF76 KatanaGF76035",
        image: "https://i5.walmartimages.com/asr/6fd49338-1318-4cb6-b228-313775b52d4d.31bbb30581a233a1dc2a52c4a7e9ec18.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "The Katana GF series is as powerful and thin as a honed blade. Sharpen your game with a 12th Gen Intel Core™ processor, NVIDIA GeForce RTX™ 30 series graphics, and an exclusive red illuminating keyboard. Crafted to unleash true performance during gameplay for hours on end. Make an impact on the battle field with the Katana GF76. MSI Katana GF76 Katana GF76035, 17.3, Gaming Notebook, Full HD 1920 x 1080, Intel Core i7 12th Gen i7-12700H, Octa-core (8 Core), 1.70 GHz, 16 GB Total RAM, 1 TB SSD, Black.",
        brand: "MSI",
        category: "Gaming",
        price: 1149.00,
        countInStock: 0,
        rating: 4.5,
        numReviews: 4
    },
    {
        name: "Sony INZONE H9",
        image: "https://i5.walmartimages.com/asr/b83dc195-1c17-4fbf-9444-9861eacea208.e0ea5794556c03dd021c72577b414310.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        description: "Sharpen your senses and prepare for your match. Our INZONE H9 wireless noise canceling over-ear gaming headset immerses you in the zone with 360 Spatial Sound for Gaming and noise cancelling for supercharged hearing and super sharp reflexes. Take performance beyond your best, detecting enemies before they see you. With 360 Spatial Sound for Gaming and our proven hardware technology, you can detect where your opponents are and how far away. Even players hiding in shadows, or behind walls and obstacles, can’t stay hidden for long. Our 360 Spatial Sound for Gaming, activated by the PC software INZONE Hub features a newly developed virtualizer for gaming that reproduces spatial sound out of multi-channel audio signals as the game creators intended. Also, with the smartphone app 360 Spatial Sound Personalizer, you’ll get spatial sound optimized to your ear shape for truly personalized gameplay.",
        brand: "Sony",
        category: "Headphones",
        price: 278.00,
        countInStock: 14,
        rating: 4.5,
        numReviews: 4
    },
]

module.exports = products;