import { supabase } from "@/lib/supabase";

export const uploadService = {
  async uploadFile(file: File, folder: string) {
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("hr-documents")
      .upload(`${folder}/${fileName}`, file);

    if (error) {
      throw new Error(error.message);
    }

    const { data: publicUrl } = supabase.storage
      .from("hr-documents")
      .getPublicUrl(data.path);

    return publicUrl.publicUrl;
  }
};