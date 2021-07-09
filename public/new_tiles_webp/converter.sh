find_dir=$1

echo "finding on folder: $find_dir";

function teste {
    folder=$1
    echo "entering on folder: $folder";
    for entry in "$search_dir"${folder}*
    do
    if [[ -d $entry ]]; then
        teste $entry/
    elif [ "${entry: -4}" == ".jpg" ]; then
        filename=$(basename -- "$entry")
        extension="${filename##*.}"
        filename="${filename%.*}"

        dir=${entry%/*}
        magick $entry -quality 75 -define webp:lossy=true "${dir}/${filename}.webp"
        rm -rf $entry
    fi
    done
}

teste $find_dir