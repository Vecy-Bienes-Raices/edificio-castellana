import os
from PIL import Image

def convert_to_webp(directory, quality=80, max_width=1600):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                file_path = os.path.join(root, file)
                file_name_no_ext = os.path.splitext(file)[0]
                new_file_path = os.path.join(root, f"{file_name_no_ext}.webp")

                try:
                    with Image.open(file_path) as img:
                        # Resize if too big
                        if img.width > max_width:
                            ratio = max_width / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save as WebP
                        img.save(new_file_path, 'webp', quality=quality)
                        print(f"Converted: {file} -> {os.path.basename(new_file_path)}")
                except Exception as e:
                    print(f"Error converting {file}: {e}")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    assets_dir = os.path.join(current_dir, 'assets')
    if not os.path.exists(assets_dir):
        print(f"Error: No se encontró la carpeta {assets_dir}")
    else:
        print(f"Convirtiendo imágenes a WebP en {assets_dir}...")
        convert_to_webp(assets_dir)
        print("Conversión completada.")
