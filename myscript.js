var image =  document.getElementById("imageOne");

            function changeImage()
            {
                if (image.getAttribute('src') == "lightoff.jpg")
                {
                    image.src = "lighton.jpg";
                }
                else
                {
                    image.src = "lightoff.jpg";
                }
            }
    
changeImage();