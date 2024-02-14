export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          created_at: string
          id: number
          id_user: string | null
          nomAgent: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_user?: string | null
          nomAgent?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_user?: string | null
          nomAgent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Commune: {
        Row: {
          created_at: string
          id: number
          nomCommune: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Relationships: []
      }
      Maison: {
        Row: {
          adresse: string | null
          created_at: string
          favori: boolean | null
          id: number
          id_Agent: number | null
          id_Quartier: number | null
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string | null
          prix: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          id_Agent?: number | null
          id_Quartier?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          id_Agent?: number | null
          id_Quartier?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Maison_id_Agent_fkey"
            columns: ["id_Agent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maison_id_Quartier_fkey"
            columns: ["id_Quartier"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maison_id_Quartier_fkey"
            columns: ["id_Quartier"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["id_Quartier"]
          }
        ]
      }
      Quartier: {
        Row: {
          created_at: string
          id: number
          id_Commune: number | null
          nomQuartier: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_Commune?: number | null
          nomQuartier?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_Commune?: number | null
          nomQuartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      quartier_commune: {
        Row: {
          id: number | null
          id_Quartier: number | null
          nomCommune: string | null
          nomQuartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
