'use client'
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { getPresignedUrl } from "@/actions/image-uploader"
import { toast } from "sonner";


interface Props {
    className?: string;
    value?: string;           
    onChange: (url: string) => void; 
}

export const ImageUploaderField: React.FC<Props> = ({ className, value, onChange }) => {

    const [loading, setLoading] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const fileName = `${Date.now()}`;

        try {
            setLoading(true);


            // Получаем presigned URL от сервера
            const urlResponse = await getPresignedUrl(fileName, file.type);

            if (urlResponse.error) {
                console.error("Upload failed", urlResponse.message);
                toast.error("Ошибка при аолучении сслыки");
                return;
            }



            if (urlResponse.succes) {
               
                const uploadResponse = await fetch(urlResponse.url, {
                    method: 'PUT',
                    body: file,
                    headers: {
                        'Content-Type': file.type,
                    }
                });

                if (!uploadResponse.ok) {
                    throw new Error(`Upload failed: ${uploadResponse.statusText}`);
                }
            }

            if (urlResponse.succes) {
                
                onChange(urlResponse.publicUrl);
                toast.success("Изображение успешно загруженно");
            }


        } catch (error) {
            console.error("Upload failed", error);
            toast.error("Ошибка при загрузке изображения")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {/* Скрытый нативный инпут */}
            <label className="cursor-pointer bg-primary/90 text-white px-[2cqw] py-[2cqw] text-[5cqw] h-fit rounded text-center hover:bg-primary/30 transition">
                {loading ? "Загрузка..." : "Выбрать фото"}
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={loading}
                />
            </label>
        </div>
    );

}